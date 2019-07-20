import React, {useState, useEffect} from 'react';
import './Quotes.scss';

import {slideToLeft, slideToRight,handleTouchStart, handleTouchMove, slidingUsingArrowsKeys} from './../../api/funs';
import quotesIMG from './../../media/icons/quotes.png'

export default function Quotes(props){
    let slider =null;
    const {quotes, time} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [xDown, setxDown] = useState(null);
    const [yDown, setyDown] = useState(null);

    function runQuotes(){
        // clearSlider();
        const quotes = document.querySelectorAll('.Quotes__quote');
        const ctrls = document.querySelectorAll('.Quotes__slider li');
        quotes.forEach((q,z)=>{
            q.classList.remove('current');
            ctrls[z].classList.remove('current');
        })
        quotes[currentIndex].classList.add('current')
        ctrls[currentIndex].classList.add('current')
        slider = setTimeout(()=>{
            let index = currentIndex === quotes.length-1 ? 0 : currentIndex+1;
            setCurrentIndex(index);
            runQuotes();
        },time);

    }
    function getQuote(e){
        clearSlider();
        setCurrentIndex(Number(e.target.dataset.index));
    }
    function clearSlider(){
        if(slider){
            clearTimeout(slider);
        }
    }
    useEffect(()=>{
        runQuotes();
        const el = document.querySelector('.Quotes');
        // //swipping
        const stateData = {
            arr:props.quotes,
            currentIndex,
            setCurrentIndex,
            xDown,
            setxDown,
            yDown,
            setyDown,
        }

        const runHandleTouchStart = function(e){
            handleTouchStart(e,stateData);
        }
        el.addEventListener('touchstart', runHandleTouchStart);
        const runHandleTouchMove = function(e){
            handleTouchMove(e, stateData);
        }
        el.addEventListener('touchmove', runHandleTouchMove);

        return ()=>{
            clearSlider();
            el.removeEventListener('touchstart', runHandleTouchStart);
            el.removeEventListener('touchmove', runHandleTouchMove);
        }
    })
    const quotesList = props.quotes.map(q => displayQuotes(q));
    const ctrls = Array.from({length:props.quotes.length}).map((li,i)=><li key={"quotes li "+i} data-index={i} onClick={e=>getQuote(e)}></li>)
    return(
        <section className="Quotes">
            <div className="section__body">
                <img src={quotesIMG} alt="quotes" className="Quotes__quoteIMG"/>
                <div className="Quotes__slider">
                    {quotesList}
                    <ul>
                        {ctrls}
                    </ul>
                </div>
            </div>
        </section>
    )
}

function displayQuotes(q){
    const has_image = q.img? 'has_image' : '';
    const keyProp = q.name? q.name: q.institution;
    return(
        <div className={"Quotes__quote cover "+has_image} key={keyProp}>
            <div className="Quote__text">
                <p>{q.text}</p>
            </div>
            <div className="Quote__contributor">
                {q.img && <img src={require("./../../media/"+q.img)} alt={q.name} className="Quote__img"/>}
                <p>
                    {q.name && <b>{q.name}<br/></b>}
                    {q.role &&<span> {q.role}<br/></span>}
                    {q.show && <i>{q.show}<br/></i>}
                    {q.institution && <a href={q.link} target="_blank"><u>
                        <i>{q.institution}</i>
                    </u></a>}

                </p>

            </div>

        </div>
    )
}

// function runQuotes(i){
//     index = i;
//     const quotes = document.querySelectorAll('.Quotes__quote');
//     const ctrls = document.querySelectorAll('.Quotes__slider li');
//     quotes.forEach((q,z)=>{
//         q.classList.remove('current');
//         ctrls[z].classList.remove('current');
//     })
//     quotes[index].classList.add('current')
//     ctrls[index].classList.add('current')
//     index = index === quotes.length-1 ? 0 : index+1;
//     slider = setTimeout(()=>runQuotes(index),15000);
//
// }
// function getQuote(e){
//     clearSlider();
//     runQuotes(Number(e.target.dataset.index));
// }
// function clearSlider(){
//     if(slider){
//         clearTimeout(slider);
//     }
// }
