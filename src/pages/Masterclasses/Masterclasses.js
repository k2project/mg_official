import React, {useEffect} from 'react';
import {NavHashLink} from 'react-router-hash-link';
import DocumentMeta from 'react-document-meta';
import './Masterclasses.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Quotes from './../../components/Quotes/Quotes';
import {masterclassQuotes} from './../../api/endorsements';
import Map from './Map/Map';
import PreviousClasses from './PreviousClasses/PreviousClasses';


export default function Masterclasses (){

    return(
        <DocumentMeta {...appPages.masterclasses.meta}>
            <div className="Masterclasses">
                <Page data = {appPages.masterclasses.topContent}>
                    <section className="Masterclasses__info">
                        {/* <div className="section__title">International workshops</div> */}
                        <div className="section__body">
                            <p>Over the last 15 years Murray has been offering Jazz, Musical Theatre dance, Audition Technique Masterclasses across the world. His classes are aimed at students from the ages of 14 who are interested in a career in the arts up to students who are in full time training. Murray has taught at some of the most respected Performing Arts Colleges in the UK and Europe offering audition technique Masterclasses.</p>
                            <p>His masterclass tours have taken him around Germany, Austria, Croatia, Scandinavia, UK, Spain, Cyprus, Italy and many more.</p>

                        </div>
                        <Map/>
                        <p>Murray’s masterclasses are for full-time students ( 14+ ) interested in a career in the arts.</p>
                    </section>
                    <PreviousClasses/>
                    <Quotes quotes={masterclassQuotes}/>
                </Page>
            </div>
        </DocumentMeta>
    )
}
