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
                    <NavLink to="/" exact>Murray Grant</NavLink>
                </div>
                <div className="Nav__media">
                    <SocialMedia/>
                </div>
                <div className="Nav__pages">
                    <NavLink to="/home" exact  onClick={toggleOpenMenu}>Home</NavLink>
                    <NavLink to="/biography"  onClick={toggleOpenMenu}>Biography</NavLink>
                    <NavLink to="/choreography"  onClick={toggleOpenMenu}>Choreography</NavLink>
                    <NavLink to="/masterclasses" onClick={toggleOpenMenu}>Masterclasses</NavLink>
                    <NavLink to="/endorsements"  onClick={toggleOpenMenu}>Endorsements</NavLink>
                    <NavLink to="/press"  onClick={toggleOpenMenu}>Press</NavLink>
                    {/* <NavHashLink to="/biography#endorsements"  onClick={toggleOpenMenu}>Endorsements</NavHashLink>
                    <NavLink to="/press"  onClick={toggleOpenMenu}>Press</NavLink> */}
                    <NavLink to="/contact"  onClick={toggleOpenMenu}>Contact</NavLink>
                    <p onClick={handleMenuBurgerClick}> <span>&times; </span></p>
                </div>
                <div className="Nav__burger" onClick={handleMenuBurgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>
        </div>
    )
}

function toggleOpenMenu(){
    const nav = document.querySelector('.Nav');
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened')
    }else{
        nav.classList.add('opened')

    }
}
function handleMenuBurgerClick(e){
    toggleOpenMenu();
    window.scrollTo(0,0);
}
