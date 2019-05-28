import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Nav.scss';
import SocialMedia from './../SocialMedia';
import {selectNavLink} from './../../api/funs'

export default function Page (props){
    useEffect(()=>{
        const links = document.querySelectorAll('.Nav__pages a');
        selectNavLink(links);
    })
    return(
        <div className="Nav">
            <section>
                <div className="Nav__brand font_themed color_themed">
                    Murray Grant
                </div>
                <div className="Nav__media">
                    <SocialMedia/>
                </div>
                <div className="Nav__pages">
                    <NavLink to="/" exact >Home</NavLink>
                    <NavLink to="/biography" >Biography</NavLink>
                    <NavLink to="/choreography" >Choreography</NavLink>
                    <NavLink to="/masterclasses" >Masterclasses</NavLink>
                    <NavHashLink to="/biography#endorsements" >Endorsements</NavHashLink>
                    <NavLink to="/press" >Press</NavLink>
                    <NavHashLink to="/press#contact" >Contact</NavHashLink>
                </div>
            </section>
        </div>
    )
}
