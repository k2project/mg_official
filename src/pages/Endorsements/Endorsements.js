import React from 'react';
import DocumentMeta from 'react-document-meta';
import './Endorsements.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import EndorsementsList from './EndorsementsList/EndorsementsList';


export default function Endorsements (){
    return(
            <DocumentMeta {...appPages.endorsements.meta}>
                <div className="Endorsements">
                    <Page data = {appPages.endorsements.topContent}>
                        <EndorsementsList/>
                    </Page>
                </div>
            </DocumentMeta>
    )
}
