import React, {useState, useEffect} from 'react';
import DocumentMeta from 'react-document-meta';

import './Home.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Top from './Top/Top';
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Clients from './Clients/Clients';

export default function Home (){
    const [showAllSections, setShowAllSections] = useState(false);
    useEffect(()=>{
        //if there's no name anim timeout = 1000
        const t = document.documentElementClientWidth> 768 ? 3500 : 1500;
        const initAnim = sessionStorage.getItem('initAnim');
        if(initAnim){
            setShowAllSections(true);
        }else{
            setTimeout(()=>{
                setShowAllSections(true);
            },t)
            sessionStorage.setItem('initAnim', 'true');
        }
    },[]);
    return(
        <DocumentMeta {...appPages.home.meta}>
            <div className="Home">
                <Page data = {appPages.home.topContent}>
                    <Top/>
                    {showAllSections && <CurrentProjects />}
                    {showAllSections && <PastProjects/>}
                    {showAllSections && <Clients/>}

                </Page>

            </div>
        </DocumentMeta>
    )
}
