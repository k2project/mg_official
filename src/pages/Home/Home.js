import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

import './Home.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import SocialMedia from './../../components/SocialMedia';
import Top from './Top/Top';
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Clients from './Clients/Clients';

export default function Home (){
    const [showAllSections, setShowAllSections] = useState(false);
    useEffect(()=>{
        const initAnim = sessionStorage.getItem('initAnim');
        if(initAnim){
            setShowAllSections(true);
        }else{
            setTimeout(()=>{
                setShowAllSections(true);
            },3500)
            sessionStorage.setItem('initAnim', 'true');
        }
    });
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
