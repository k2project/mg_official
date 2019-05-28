import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <section className="Choreography__info">
                        <div className="section__title">Worldwide Choreographer</div>
                        <p>In addition to a lengthy performance career, Murray's directorial and choreographic credits include: touring China and Europe with <i>Musical Starlights</i>, European tour of <i>Best of Musicals, Twelve International Tenors</i> tours of Europe, <i>Moulin Rouge</i> (German TV Production), <i>The Phantom of the Opera</i> and <i>Carnaby Street Capers</i> for P&O World Cruises, <i>Macphersons Rant</i> (World Premiere, Scotland), Union Square Opening Ceremony (Scotland) and <i>Lifted</i> for TUI’s Sensatori Resorts.</p>
                        <p>Murray has also choreographed the successful <b>Fringe</b> productions of <i>Zanna Don’t, The Great American Trailer Park Musical</i> and <i>Guys Sing Dolls.</i></p>
                        <p>He has also directed and choreographed the likes of <i>Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Louise Dearman, Jon Lee, Zoe Tyler, Jai Mcdowall</i> and many more in the series of concerts produced by <b>Tonight Productions</b>.</p>
                        <NavLink to="/" className="btn">Murray's Other Projects</NavLink>
                    </section>
                    <section className="Choreography__imgs color_themed">

                    </section>
                </Page>
            </div>
        </DocumentMeta>
    )
}
