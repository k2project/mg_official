import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Clients.scss';
import {pastProjectsClients} from './../../../api/projects';

export default function Clients (){
    const clientsLogos = pastProjectsClients.map(project=>{
        const{clientsLogo} = project.imgs;
        const {name} = project.projectName;
        const logo = require('./../../../media/logos/'+clientsLogo);
        return <img src={logo} alt={name} key = {"logos_"+name}/>

    })
    return(
        <section className="Clients">
            <div className="section__title">CLIENTS</div>
            <div className="wrapper">
                {clientsLogos}
            </div>
            <NavLink to="/biography" className="btn">About Murray</NavLink>
        </section>
    )

}
