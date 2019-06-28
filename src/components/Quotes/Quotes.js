import React,{useEffect} from 'react';
import './Quotes.scss';

import quotes from './../../media/icons/quotes.png'
let index = 0;
let slider =null;

export default function Quotes(props){
    useEffect(()=>{
        clearSlider();
        runQuotes(0);
        return ()=>{
            clearSlider();
        }
    })
    const quotesList = props.quotes.map(q => displayQuotes(q));
    const ctrls = Array.from({length:props.quotes.length}).map((li,i)=><li key={"quotes li "+i} data-index={i} onClick={e=>getQuote(e)}></li>)
    return(
        <section className="Quotes">
            <div className="section__body">
                <img src={quotes} alt="quotes"/>
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
    return(
        <div className="Quotes__quote cover" key={q.name}>
            <div className="Quotes__text">
                {q.text}
            </div>
            <p>
                {q.name && <span>
                    <b>- {q.name} -</b><br/>
                    <a href={q.link} target="_blank"><u>
                        <i>{q.institution}</i>
                    </u></a>
                </span>
                }
                {q.show && <span>
                    <b><a href={q.link} target="_blank"><u>
                        {q.institution}
                    </u></a></b> <br/>
                    <i>{q.show}</i>
                </span>

                }


            </p>
        </div>
    )
}

function runQuotes(i){
    index = i;
    const quotes = document.querySelectorAll('.Quotes__quote');
    const ctrls = document.querySelectorAll('.Quotes__slider li');
    quotes.forEach((q,z)=>{
        q.classList.remove('current');
        ctrls[z].classList.remove('current');
    })
    quotes[index].classList.add('current')
    ctrls[index].classList.add('current')
    index = index === quotes.length-1 ? 0 : index+1;
    slider = setTimeout(()=>runQuotes(index),10000);

}
function getQuote(e){
    clearSlider();
    runQuotes(Number(e.target.dataset.index));
}
function clearSlider(){
    if(slider){
        clearTimeout(slider);
    }
}
