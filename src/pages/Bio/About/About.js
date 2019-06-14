import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import './About.scss';

export default function About (){
    return(
        <section>
            <div className="About">
                <div className="About__img">
                    <div className="cover"></div>
                </div>
                <div className="About__text">
                    <p>Murray graduated from London’s Bird College in 2001 and immediately won a contract in London City Opera’s US tour of <i>The Merry Widow</i> (New York, Los Angeles, San Francisco and others). He performed in numerous musicals subsequently, including <i>Jesus Christ Superstar</i> (Vienna), <i>Paris Can-Can</i> (Sydney, Melbourne, Auckland), <i>Grease</i> (Zurich) and <i>Saturday Night Fever</i> (Vienna).</p>
                    <p>As Director and Choreographer, Murray’s extensive credits include P&O Cruises, The Entertainment Department, <i>Musical Starnights</i> (European tour), Union Square Opening Ceremony (Aberdeen), <i>12 Tenors</i> (European tour), Moulin Rouge TV Promotion (Germany). He has also directed and choreographed for musical theatre stars Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Jon Lee and many more for concert series <i>Tonight from the West End</i>.</p>
                    <p>Murray is the founder and creative director of The MGA Academy of Performing Arts (Edinburgh), MGA Management, Beyond Broadway Productions and Fierce Theatre Schools. He is a founder and Trustee of the MGA Foundation, a charity offering financial support to people from non-privileged backgrounds in Scotland to pursue Performing Arts training. Murray has served as a freelance advisor for the Institute of the Arts Barcelona, Cyprus Performing Arts and The Entertainment Department. He is also an international judge for DanceStar world dance competitions, judging Qualifiers in South African and World Final in Croatia.</p>
                    <NavHashLink to="/#projects" className="btn">Murray's Projects</NavHashLink>
                </div>

            </div>
        </section>
    )
}
