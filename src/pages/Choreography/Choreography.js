import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import DocumentMeta from 'react-document-meta';
import './Choreography.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';


export default function Choreography (){

    return(
        <DocumentMeta {...appPages.choreography.meta}>
            <div className="Choreography">
                <Page data = {appPages.choreography.topContent}>
                    <section>

                    </section>
                </Page>
            </div>
        </DocumentMeta>
    )
}
