import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Top.scss';

export default function Top (){

    return(
        <section className="Top">
            <div className="cover">
                <div className="animContainer">
                    <div className="animBox">
                        <div className=" animBox_title font_themed">Murray Grant</div>
                        <div className="animBox_subtitle color_themed">Creative Entrepreneur</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
