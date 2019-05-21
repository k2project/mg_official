import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Footer.scss';
import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';
import SocialMedia from './../SocialMedia';

export default function Footer(){
    return(
        <footer>
            <div className="cover">
                <div>
                    Murray Grant Official Website &copy;{new Date().getFullYear()}
                    {/* <SocialMedia/> */}
                </div>
                <div>
                    <NavLink to="/" exact >Home</NavLink>
                    <NavLink to="/biography" >Biography</NavLink>
                    <NavLink to="/choreography" >Choreography</NavLink>
                    <NavLink to="/masterclasses" >Masterclasses</NavLink>
                    {/* <NavHashLink to="/biography#endorsements" >Endorsements</NavHashLink>
                    <NavLink to="/press" >Press</NavLink> */}
                    <NavHashLink to="/press#contact" >Contact</NavHashLink>
                    <NavLink to="/cookies_policy" >Cookies Policy</NavLink>
                </div>
             </div>
        </footer>
    )
}
