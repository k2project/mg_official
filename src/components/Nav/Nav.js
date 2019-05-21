import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';

import './Nav.scss';

import SocialMedia from './../SocialMedia';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';

import {selectNavLink} from './../../api/funs'

export default function Page (props){
    useEffect(()=>{
        const links = document.querySelectorAll('.Nav__pages a');
        selectNavLink(links);
    })
    return(
        <div className="Nav">
            <section>
                <div className="Nav__brand">
                    <h1 className="font_themed color_themed">Murray Grant</h1>
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
