import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Top.scss';

import facebook from './../../../media/icons/facebook.png';
import twitter from './../../../media/icons/twitter.png';
import instagram from './../../../media/icons/instagram.png';
import linkedin from './../../../media/icons/linkedin.png';
export default function Top (){

    return(
        <section className="Top">
            <div className="cover">
                <div className="animContainer">
                    <div className="animBox">
                        <h1 className="font_themed">Murray Grant</h1>
                        <h2 className="color_themed">Creative Enterpreneur</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
