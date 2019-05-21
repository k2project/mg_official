import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
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
    useEffect(createSessionStorageForInitAnim);
    return(
        <DocumentMeta {...appPages.home.meta}>
            <div className="Home">
                <Page data = {appPages.home.topContent}>
                    <Top/>
                    <CurrentProjects />
                    <div className="Home__hidden">
                        <PastProjects/>
                        <Clients/>
                    </div>
                </Page>

            </div>
        </DocumentMeta>
    )
}

function createSessionStorageForInitAnim(){
    const initAnim = sessionStorage.getItem('initAnim');
    const pastProjectsShown = sessionStorage.getItem('pastProjectsShown');
    if(initAnim){
        document.querySelector('.Home').classList.add('not_anim');
    }else{
        sessionStorage.setItem('initAnim', 'true');
    }
    if(pastProjectsShown){
        document.querySelector('.Home').classList.add('pastProjects_shown');
    }
}
