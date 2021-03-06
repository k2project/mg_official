import React from 'react';
import DocumentMeta from 'react-document-meta';
import './Bio.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';


export default function Bio (){
    return(
            <DocumentMeta {...appPages.biography.meta}>
                <div className="Bio">
                    <Page data = {appPages.biography.topContent}>
                        <section className="About">
                            <div className="section__body">
                                <p>Murray graduated from London’s Bird College in 2001 and immediately won a contract in London City Opera’s US tour of <i>The Merry Widow</i> (New York, Los Angeles, San Francisco and others). He performed in numerous musicals subsequently, including <i>Jesus Christ Superstar</i> (Vienna), <i>Elisabeth</i> (Vienna), <i>Paris Can-Can</i> (Sydney, Melbourne, Auckland), <i>Grease</i> (Zurich) and <i>Saturday Night Fever</i> (Vienna).</p>
                                <p>As Director and Choreographer, Murray’s extensive credits include P&O Cruises, The Entertainment Department, <i>Musical Starnights</i> (European tour), Union Square Opening Ceremony (Aberdeen), <i>12 Tenors</i> (European tour), Moulin Rouge TV Promotion (Germany). He has also directed and choreographed for musical theatre stars Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Jon Lee and many more for concert series <i>Tonight from the West End</i>.</p>
                                <p>Murray is the founder and creative director of The MGA Academy of Performing Arts (Edinburgh),
Network Artist Management (Formally MGA Management), Beyond Broadway Productions and
Fierce Theatre Schools. Murray has served as a freelance advisor for the Ins
titute of the Arts
Barcelona, Cyprus Performing Arts and The Entertainment Department. He is also an international
judge for DanceStar world dance competitions, judging Qualifiers in South Africa and World Final
in Croatia.</p>
                            </div>
                        </section>
                    </Page>
                </div>
            </DocumentMeta>
    )
}
