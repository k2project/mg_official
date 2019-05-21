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
                    <p>Graduating in 2001 from Bird College, London. Murray immediately won a contract to tour the USA.  Murray has performed as a dancer all over the world, most notably Los Angeles, New York, San Francisco, Auckland, Chicago, Sydney and Vienna. Murray has performed in Musical theatre shows such as The Merry Widow, Elisabeth, Grease, Jesus Christ Superstar, Saturday Night Fever and many more.</p>
                    <p>In addition to a lengthy performance career, Murray's directorial and choreographic credits include: touring China and Europe with Musical Starlights, European tour of Best of Musicals, Twelve International Tenors tours of Europe, Moulin Rouge (German TV Production), The Phantom of the Opera and Carnaby Street Capers for P&O World Cruises, Macphersons Rant (World Premiere, Scotland), Union Square Opening Ceremony (Scotland).</p>
                    <p>He has also Directed and choreographed the likes of Adam Garcia, Ruthie Henshall, Kerry Ellis, Christina Bianco, Louise Dearman, Jon Lee & many more in the series of concerts produced by Tonight Productions and Beyond Broadway Productions (in which Murray is the Creative Director and Founder).</p>
                    <p>For the last couple of years Murray has been working as an advisor for Institute of the Arts, Barcelona and for ted (the entertainment department) in which his role has included masterclass tours, recruitment, creative direction and choreography.</p>
                    <NavHashLink to="/#projects" className="btn">Murray's Projects</NavHashLink>
                </div>

            </div>
        </section>
    )
}
