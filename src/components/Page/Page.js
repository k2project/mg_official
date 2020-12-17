import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Page.scss';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import loader from './../../media/icons/loader.png';
import soundIsOff from './../../media/icons/soundIsOff.png';
import soundIsOn from './../../media/icons/soundIsOn.png';

export default function Page(props){
    useEffect(()=>{
        if(!window.location.hash){
            window.scrollTo(0,0);
        }
    });
    const {data} = props;
    const cookies = localStorage.getItem("mg-app-cookies");
    return(
        <div className="Page">
            <Nav/>
            <section className="Page__top">
                { data.video && document.documentElement.clientWidth>768 &&<Video video={data.video}/>}
                <div className="cover">
                    {data.title && <p className="Page__top_title font_themed">{data.title}</p>}
                    {data.subtitle && <p className="Page__top_subtitle font_themed">{data.subtitle}</p>}
                    {data.content}
                </div>
            </section>
            {props.children}
            {!cookies && <CookiesDisclaimer/>}
            <Footer/>
        </div>
    )
}

function Video (props){
    const {path, sound} = props.video;

    const [soundOn, setSound] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    useEffect(()=>{
        const vid = document.getElementById("page-video");
        //animate video on load

        vid.onloadeddata = function() {
            setVideoLoading(false);
            vid.classList.add('show');
        };
        //for video with sound
        //set the sound controls
        //mute when video out of viewport
        if(sound){
            //setting mute video onload
            setSound(setVideoSounInSessionStorage(vid));
            document.addEventListener('scroll', muteVideoOnScroll)
            document.addEventListener('resize', muteVideoOnScroll)
        }
        return ()=>{
            document.removeEventListener('scroll', muteVideoOnScroll)
            document.removeEventListener('resize', muteVideoOnScroll)

        }

    },[sound])
    return(
        <div className="Video">
            {videoLoading && <img src={loader} alt="loader" className="loader"/>}
            <video loop autoPlay id="page-video">
                 <source src={require('./../../media/videos/'+path).default} type="video/mp4" />
            </video>
            {sound && <div className="video_ctrl_sound" onClick={()=>toggleSound(soundOn, setSound)}>
                {soundOn && <img src={soundIsOn} alt="sound on"/>}
                {!soundOn && <img src={soundIsOff} alt="sound off"/>}
            </div>}
        </div>
    )
}
function toggleSound(soundOn, setSound){
    const vid = document.getElementById("page-video");
    if(soundOn){
        setSound(false);
        vid.muted = true;
        sessionStorage.setItem('videoSound','off');
    }
    if(!soundOn){
        setSound(true);
        vid.muted = false;
        sessionStorage.setItem('videoSound','on');
    }
}

function muteVideoOnScroll(){
    const vid = document.getElementById("page-video");
    const pageTop = document.querySelector('.Page__top');
    const vidBottom = pageTop.getBoundingClientRect().bottom;
    if(vidBottom < -50){
        vid.muted = true;
    }else{
        setVideoSounInSessionStorage(vid);
    }

}
function setVideoSounInSessionStorage(vid){
    const videoSound = sessionStorage.getItem('videoSound');
    //return boolen value for useState->soundOn on load
    //set mute on load
    if(!videoSound){
        sessionStorage.setItem('videoSound','off');
        vid.muted = true;
        return false;
    }else{
        if(videoSound === 'on'){
            vid.muted = false;
            return true;
        }else{
            vid.muted = true;
            return false;
        }
    }
}

function CookiesDisclaimer(){
    return(
        <div className="cookies__disclaimer">
            <p>We use cookies on our website for functional and analytical purposes. If you continue to use our services, we will asume that you agree to the use of such cookies. Find out more about cookies and how you can refuse them <NavLink to="/cookies_policy" ><u>here</u></NavLink>.</p>
            <div onClick={setCookiesStorage}> OK</div>
        </div>

    )
}

function setCookiesStorage(e){
    localStorage.setItem("mg-app-cookies","accepted");
    e.target.parentElement.remove();
}
