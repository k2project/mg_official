import React from 'react';
import { NavLink } from 'react-router-dom';
import './Endorsements.scss';

import {endorsements} from './../../../api/endorsements';
import spain from './../../../media/icons/spain.png';

export default function Endorsements (){
    const endorsementsList = endorsements.map(endorsement => displayEndorsements(endorsement))
    return(
        <section>
            <div className="section__title">Industry Endorsements</div>
            <div className="Endorsements" id="endorsements">
                {/* <img src={quotes} alt="quotes" className="quote__img_top"/>
                <img src={quotes} alt="quotes" className="quote__img_btm"/>
                <div className="Endorsements__intro">
                    <p className="font_themed">Find out what businesses that Murray's worked with say about him...</p>
                    <p><NavLink to="/press" className="btn">Murray in Press</NavLink></p>
                </div> */}
                <div className="Endorsements__quotes">
                    {endorsementsList}
                </div>
            </div>
        </section>
    )
}
function displayEndorsements(endorsement){
    const {title, name, text, link, country} = endorsement;
    return(
        <div className="quote" key={name}>
            <p className="quote__text">{text}</p>
            <div className="quote__name">
                <b>{name}</b> <br/>
                <i><a href={link} target="_blank"  rel="noopener noreferrer"> {title} </a></i>
                <img src={require('./../../../media/icons/'+country.flag)} alt={country.name} className="quote__flag"/>
            </div>
        </div>
    )

}
