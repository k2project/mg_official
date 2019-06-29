import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import DocumentMeta from 'react-document-meta';
import './Choreography.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import Quotes from './../../components/Quotes/Quotes';
import {choreographyQuotes} from './../../api/endorsements';

//posters
import AddamsFamily from './../../media/posters/AddamsFamily.jpg';
import BatBoy  from './../../media/posters/BatBoy.jpg';
import Flashdance  from './../../media/posters/Flashdance.jpg';
import FarewellMySon  from './../../media/posters/FarewellMySon.jpg';
import gatp  from './../../media/posters/gatp.jpg';
import HonkPoster  from './../../media/posters/HonkPoster.jpg';
import IABPajamaGame  from './../../media/posters/IABPajamaGame.jpg';
import IABSpringAwakening  from './../../media/posters/IABSpringAwakening.jpg';
import Legallyblonde  from './../../media/posters/Legallyblonde.jpg';
import LSOH  from './../../media/posters/LSOH.jpg';
import Starnights  from './../../media/posters/Starnights.jpg';
import TheProducers  from './../../media/posters/TheProducers.jpg';
import Tonight2015  from './../../media/posters/Tonight2015.jpg';
import Tonight2016  from './../../media/posters/Tonight2016.jpg';
import TonightXmas from './../../media/posters/TonightXmas.jpg';
import WOZ from './../../media/posters/WOZ.jpg';
import Zanna from './../../media/posters/Zanna.jpg';


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
                    <Posters/>

                </Page>
            </div>
        </DocumentMeta>
    )
}

function Posters(){
    return(
        <section className="Posters">
            <img src={WOZ} alt="The Wizard of Oz"/>
            <img src={AddamsFamily} alt="Addams Family"/>
            <img src={Flashdance} alt="Flashdance"/>
            <img src={BatBoy} alt="Bat Boy"/>
            <img src={FarewellMySon} alt="Farewell My Son"/>
            <img src={Tonight2015} alt="Tonight 2015"/>
            <img src={gatp} alt="The Great American Trailer Park Musical"/>
            <img src={IABSpringAwakening} alt="IAB Spring Awakening"/>
            <img src={HonkPoster} alt="Honk Poster"/>
            <img src={IABPajamaGame} alt="IAB Pajama Game"/>
            <img src={Legallyblonde} alt="Legally Blonde"/>
            {/* <img src={Tonight2016} alt="Tonight 2016"/> */}
            <img src={LSOH} alt="Little Shop Of Horrors"/>
            <img src={Starnights} alt="The Best of Musical Starnights"/>
            <img src={TheProducers} alt="The Producers"/>
            {/* <img src={Zanna} alt="Zanna Dont"/> */}
            <img src={TonightXmas} alt="Tonight Xmas"/>
        </section>
    )
}
