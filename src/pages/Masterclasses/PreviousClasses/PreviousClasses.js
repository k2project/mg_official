import React from 'react';
import { NavLink } from 'react-router-dom';
import './PreviousClasses.scss';
import {classes} from './../../../api/masterclasses';

export default function PreviousClasses(){

    return(
        <section className="PreviousClasses">
            <div className="section__title">Workshops Associates</div>
            <div className="wrapper">
                {classes.map(cl=><img src={require('./../../../media/logos/'+cl.img)} alt={cl.name} key={cl.name}/>)}
            </div>
            <NavLink to="/" className="btn">Murray's Other Projects</NavLink>
        </section>
    )
}
