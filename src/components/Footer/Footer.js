import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Footer.scss';

export default function Footer(){
    return(
        <footer className="Footer">
            <div className="Footer_brand">
                Murray Grant Official Website &copy;{new Date().getFullYear()}
            </div>
            <div className="Footer_nav">
                <NavLink to="/" exact >Home</NavLink>
                <NavLink to="/biography" >Biography</NavLink>
                <NavLink to="/choreography" >Choreography</NavLink>
                <NavLink to="/masterclasses" >Masterclasses</NavLink>
                {/* <NavHashLink to="/biography#endorsements" >Endorsements</NavHashLink>
                <NavLink to="/press" >Press</NavLink> */}
                <NavHashLink to="/press#contact" >Contact</NavHashLink>
                <NavLink to="/cookies_policy" >Cookies Policy</NavLink>
                <a onClick={()=>{window.scrollTo(0,0)}}>Go To Top</a>
            </div>
        </footer>
    )
}
