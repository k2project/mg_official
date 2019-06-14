import React, {useState, useEffect} from 'react';
import './Clients.scss';
import {pastProjectsClients} from './../../../api/projects';
console.log(pastProjectsClients.length)

export default function Clients (){
    const clientsLogos = pastProjectsClients.map(project=>{
        const{clientsLogo} = project.imgs;
        const{title} = project.role;
        const {name} = project.projectName;
        // const cls = name.split(' ').join('');
        const logo = require('./../../../media/logos/'+clientsLogo);
        return(
            <div className={"Clients__logo logo_"+project.cls}  key = {"logos_"+name}>
                <img src={logo} alt={"logo" + name}/>
                {/* <p>[ {title} ]</p> */}
            </div>
        )
    })
    return(
        <section className="Clients">
            {/* <div className="section__title">Clients</div> */}
            <div className="wrapper">
                {clientsLogos}
            </div>
        </section>
    )

}
