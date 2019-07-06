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
                                Murray’s choreography and directing credits include: <i>Musical Starnights</i> (European tour), <i>Musicals Wanted</i> (European tour), P&O Cruises (Aurora World Cruise), 12 International Tenors (European tour), <i>Macphersons Rant</i> (world première), <i>Zanna Don’t!</i> (Edinburgh Fringe sell-out run), <i>The Great American Trailer Park Musical</i> (Edinburgh Fringe), <i> Guys Sing Dolls</i> (world première and Edinburgh Fringe run). Murray also choreographed the opening of Union Square Shopping Centre (Aberdeen) for which he created a flashmob featuring over 100 dancers.
                            </p>
                            <p>
                                Murray has choreographed many musical theatre productions for performing arts colleges and universities around Europe, including: <i>The Addams Family, Bat Boy, Flashdance, Little Shop of Horrors, Legally Blonde, The Wizard of Oz, Bring it On, Fame, The Pajama Game, Honk!, Spring Awakening</i> and many more.
                            </p>
                            <p>
                                He has also worked on the corporate scene for around ten years choreographing and directing events for Baillie Gifford, PureGym, Sykes, BP, Jack Wills, Edinburgh Zoo, Zeal Experiential, Brodies, Prudential, Gleneagles, Deutsche Bank, Sheraton, Maximillion, National Museum of Scotland, Ernst & Young, British Orthodontic Society, Harvey Nichols, Radisson Blu among others.
                            </p>
                            <p>
                                Murray was also Director/Choreographer on the concert series <i>Tonight from the West End</i>, and worked with musical theatre stars Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Ray Quinn, Zoe Tyler, Jai McDowall, Jon Lee and Louise Dearman.
                            </p>


                            {/* <NavLink to="/home" className="btn btn_section">Other Projects</NavLink> */}
                        </div>
                    </section>
                    <Posters/>
                    <Quotes quotes={choreographyQuotes}/>

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
            <img src={HonkPoster} alt="Honk Poster"/>
            <img src={IABPajamaGame} alt="IAB Pajama Game"/>
            <img src={Legallyblonde} alt="Legally Blonde"/>
            <img src={Tonight2015} alt="Tonight 2015"/>
            <img src={gatp} alt="The Great American Trailer Park Musical"/>
            <img src={IABSpringAwakening} alt="IAB Spring Awakening"/>
            {/* <img src={Tonight2016} alt="Tonight 2016"/> */}
            <img src={LSOH} alt="Little Shop Of Horrors"/>
            <img src={Starnights} alt="The Best of Musical Starnights"/>
            <img src={TheProducers} alt="The Producers"/>
            <img src={Zanna} alt="Zanna Dont"/>
            <img src={TonightXmas} alt="Tonight Xmas"/>
        </section>
    )
}
