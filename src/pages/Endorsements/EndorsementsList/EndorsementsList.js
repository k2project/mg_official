import React from 'react';
import { NavLink } from 'react-router-dom';
import './EndorsementsList.scss';

import {endorsements} from './../../../api/endorsements';

export default function Endorsements (){
    const endorsementsList = endorsements.map(endorsement => displayEndorsements(endorsement))
    return(
        <section className="EndorsementsList" id="endorsements">
            <div className="EndorsementsList__quotes">
                {endorsementsList}
            </div>
            <NavLink to="/press" className="btn">In The News</NavLink>
        </section>
    )
}
function displayEndorsements(endorsement){
    let {title, name, text, link, country, cls} = endorsement;
    cls = cls? cls : '';
    return(
        <div className={"quote "+cls} key={name}>
            <p className="quote__text"><q>{text}</q></p>
            <div className="quote__name">
                <b><u><a href={link} target="_blank"  rel="noopener noreferrer">{name}</a></u></b> <br/>
                <i>{title} </i>
                <img src={require('./../../../media/icons/'+country.flag)} alt={country.name} className="quote__flag"/>
            </div>

        </div>
    )

}
