import React, {useEffect} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import DocumentMeta from 'react-document-meta';
import './Masterclasses.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Map from './Map/Map';
import PreviousClasses from './PreviousClasses/PreviousClasses';


export default function Masterclasses (){

    return(
        <DocumentMeta {...appPages.masterclasses.meta}>
            <div className="Masterclasses">
                <Page data = {appPages.masterclasses.topContent}>
                    <section className="Masterclasses__info">
                        {/* <div className="section__title">International workshops</div> */}
                        <p>Over the last 15 years Murray has been offering Jazz, Musical Theatre Dance and Audition Technique workshops across the world. <br className="mobile"/> His masterclass tours have taken him around Spain, Sweden, Ireland, Cyprus, Germany, Austria and the UK.</p>
                        <Map/>
                        <p>Murray’s masterclasses are for full-time students ( 14+ ) interested in a career in the arts.</p>
                    </section>
                    <PreviousClasses/>
                </Page>
            </div>
        </DocumentMeta>
    )
}
