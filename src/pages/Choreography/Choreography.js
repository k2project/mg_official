import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import DocumentMeta from 'react-document-meta';
import './Choreography.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Quotes from './../../components/Quotes/Quotes';
import {choreographyQuotes} from './../../api/endorsements';


export default function Choreography (){

    return(
        <DocumentMeta {...appPages.choreography.meta}>
            <div className="Choreography">
                <Page data = {appPages.choreography.topContent}>
                    <section>
                        <div className="section__body">
                            {/* <div className="section__title">Worldwide Choreographer</div> */}
                            <p>
                                Murray’s directorial and choreographic credits include Musical Starnights (European tour), Musicals Wanted (European tour), P&O Cruises (Aurora World Cruise), 12International Tenors (European tour), Macphersons Rant (World Premier), Zanna Don’t (Edinburgh Fringe Sell out production), The Great American Trailer Park Musical (Edinburgh Fringe), Guys Sing Dolls (World Premier & Edinburgh Fringe run), he also choreographed the opening of Union Square Shopping Centre (Aberdeen) in which he choroegraphed a flashmob with over 100 dancers.
                            </p>
                            <p>
                                Murray has also choreographed many musicals for Performing Arts universities
                                around Europe including; Addams Family, Bat Boy, Flashdance, Little Shop of
                                Horrors, Legally Blonde, Wizard of Oz, Bring it On, Fame, The Pajama Game, Honk, Spring Awakening and more.

                            </p>
                            <p>
                                He has also worked on the corporate scene for around 10 years choreographing and directing events for Baillie Gifford, PureGym, Sykes, BP, Jack Wills, Edinburgh Zoo, Zeal Experiential, Brodies, Prudential, Gleneagles, Deutsche Bank, Sheraton, Maximillion, National Museum of Scotland, Ernst & Young, British Orthodontic Society, Harvey Nichols, Radisson Blu and many more.
                            </p>
                            <p>
                                Murray was also Director/Choreographer for a series of concerts called “Tonight from the West End” in which he worked with musical theatre stars Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Ray Quinn, Zoe Tyler, Jai McDowall, Jon Lee and Louise Dearman.
                            </p>

                            
                            {/* <NavLink to="/home" className="btn btn_section">Other Projects</NavLink> */}
                        </div>
                    </section>
                    <Quotes quotes={choreographyQuotes}/>

                </Page>
            </div>
        </DocumentMeta>
    )
}
