import React from 'react';
import DocumentMeta from 'react-document-meta';
import './Bio.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import About from './About/About';
// import Endorsements from './Endorsements/Endorsements';


export default function Bio (){
    return(
            <DocumentMeta {...appPages.biography.meta}>
                <div className="Bio">
                    <Page data = {appPages.biography.topContent}>
                        <About/>
                        {/* <Endorsements/> */}
                    </Page>
                </div>
            </DocumentMeta>
    )
}
