import React , {useEffect} from 'react';
import './../App.scss';
import DocumentMeta from 'react-document-meta';

import {appPages} from './../api/appData';

let speed = 50;
export default function Holdingpage (){
    useEffect(()=>{
        setTimeout(startTimer,1000);
    })
    return(
        <DocumentMeta {...appPages.home.meta}>
            <div className="Holdingpage">
                <div className="cover">
                    <div className=" Holdingpage__title font_themed color_themed">
                        Murray Grant
                    </div>
                    <div className="timer">
                        <div>
                            <div className="Holdingpage__timer">00</div>
                            <br/><span>Day(s)</span>
                        </div>
                        <div>
                            <div className="Holdingpage__timer">00</div>
                            <br/><span>Hour(s)</span>
                        </div>
                        <div>
                            <div className="Holdingpage__timer">00</div>
                            <br/><span>Min(s)</span>
                        </div>
                        <div>
                            <div className="Holdingpage__timer">00</div>
                            <br/><span>Sec(s)</span>
                        </div>
                    </div>
                    <p>New Official Website Is Coming</p>
                </div>

            </div>
        </DocumentMeta>
    )
}

function getTimerData(){
    const endDate = new Date("Aug 01, 2019 01:00:00").getTime();

    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        return[
            days,
            hours,
            mins,
            secs
        ]
    }

}
function runTimer(){
    const timerEls = document.querySelectorAll('.Holdingpage__timer');
    const timer = setInterval(function() {
            const timerData = getTimerData();
            timerEls.forEach((el,index)=>{
                el.textContent = ("0"+timerData[index]).slice(-2);
            })

    }, 1000);
}
function startTimer(){
    runTimer();
    const timerEls = document.querySelectorAll('.Holdingpage__timer');
    timerEls.forEach((el,index)=>{
        let n = 0;
        let int = setInterval(function(){
            const timerData = getTimerData();
            ++n;
            if(n<=timerData[index]){
                const text = ("0"+n).slice(-2)
                el.textContent = text;
            }else{
                clearInterval(int);
            }
        },speed);
    })


}
