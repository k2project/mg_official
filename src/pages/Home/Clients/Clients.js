import React from 'react';
import './Clients.scss';
import {pastProjectsClients} from './../../../api/projects';

export default function Clients (){
    const clientsLogos = pastProjectsClients.map(project=>{
        const{clientsLogo} = project.imgs;
        const {name} = project.projectName;
        const logo = require('./../../../media/logos/'+clientsLogo).default;
        return <img src={logo} alt={name} key = {"logos_"+name}/>

    })
    return(
        <section className="Clients">
            <div className="section__title">CLIENTS</div>
            <div className="wrapper flex">
                {clientsLogos}
            </div>
          
        </section>
    )

}
