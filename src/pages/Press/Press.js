import React, {useEffect} from 'react';
import DocumentMeta from 'react-document-meta';
import './Press.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Articles from './Articles/Articles';
import Contact from './Contact/Contact';


export default function Press (){

    return(
        <DocumentMeta {...appPages.press.meta}>
            <div className="Press">
                <Page data = {appPages.press.topContent}>
                    {/* <section> */}
                        <Articles/>
                    {/* </section> */}
                    {/* <section> */}
                        <Contact/>
                    {/* </section> */}
                </Page>
            </div>
        </DocumentMeta>
    )
}
