import React, {useState, useEffect} from 'react';
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
            <div className="wrapper">
                {clientsLogos}
            </div>
        </section>
    )

}
