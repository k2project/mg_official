import React from 'react';
import { NavLink } from 'react-router-dom';
import './Endorsements.scss';

import {endorsements} from './../../../api/endorsements';

export default function Endorsements (){
    const endorsementsList = endorsements.map(endorsement => displayEndorsements(endorsement))
    return(
        <section className="Endorsements" id="endorsements">
            <div className="section__title">Industry Endorsements</div>
            <div className="Endorsements__quotes">
                {endorsementsList}
            </div>
        </section>
    )
}
function displayEndorsements(endorsement){
    let {title, name, text, link, country, cls} = endorsement;
    cls = cls? cls : '';
    return(
        <div className={"quote "+cls} key={name}>
            <p className="quote__text">{text}</p>
            <div className="quote__name">
                <b>{name}</b> <br/>
                <i><a href={link} target="_blank"  rel="noopener noreferrer"> {title} </a></i>
                <img src={require('./../../../media/icons/'+country.flag)} alt={country.name} className="quote__flag"/>
            </div>
        </div>
    )

}
