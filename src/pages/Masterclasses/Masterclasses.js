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
                        <div className="section__body">
                            <p>Since 2004, Murray has been providing masterclasses in Jazz, Musical Theatre, Dance and Audition Technique and has had opportunity to lead these in a range of locations around the world. Classes are usually aimed at students aged 14 and up with an interest in a career in performing arts, and students who are currently in full-time professional training.</p>
                            <p>Murray also teaches Audition Technique masterclasses at some of the most respected Performing Arts Colleges in the UK and across Europe. Recent tours have taken him around Germany, Austria, Croatia, Scandinavia, UK, Spain, Cyprus and Italy.</p>

                        </div>
                        <Map/>
                    </section>
                    <PreviousClasses/>
                    <Quotes quotes={masterclassQuotes}/>
                </Page>
            </div>
        </DocumentMeta>
    )
}
