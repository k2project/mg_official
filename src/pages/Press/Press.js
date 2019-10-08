import React from 'react';
import DocumentMeta from 'react-document-meta';
import './Press.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Articles from './Articles/Articles';
import Downloads from './Downloads/Downloads';


export default function Press (){

    return(
        <DocumentMeta {...appPages.press.meta}>
            <div className="Press">
                <Page data = {appPages.press.topContent}>
                        <Articles/>
                        <Downloads/>
                </Page>
            </div>
        </DocumentMeta>
    )
}
