import React, { useState, useEffect } from 'react';
import './Downloads.scss';
import {mediaDownloads} from './mediaDownloads';

export default function Downloads (){
    const[link, showLink] = useState(true);
    const[login, showLogin] = useState(false);
    const[gallery, showGallery] = useState(false);
    function handleLinkClick(){
        showLink(false);
        showLogin(true);
    }
    function loadGallery(){
        console.log('gallery')
        showLogin(false)
        showGallery(true);
    }
    function hideGallery(){
        showGallery(false);
        showLink(true);
    }
    useEffect(()=>{
        const gallery = document.querySelector('.Gallery');
        if(gallery){
            gallery.scrollIntoView({behavior: "smooth"});
        }

    })
    return(<div className="Downloads" id="downloads">
        {link && <div className="Downloads__link" onClick={handleLinkClick}>Press Materials For Download.</div>}
        {login && <Login loadGallery={ loadGallery }/>}
        {gallery && <Gallery hideGallery={hideGallery}/>}
    </div>)
}

function Login(props){
    const[err, setErr] = useState(false)
    function handleLoginClick(){

        const input = document.querySelector('.Login input');
        if(input.value){
            if(process.env.REACT_APP_LOGIN_PASS === input.value){
                console.log('loadding gallery...')
                props.loadGallery();
            }else{
                setErr('INCORRECT PASSWORD! Try again or contact Murray at murray@murraygrantofficial.com.')
            };
            input.value = '';
        }

    }
    function handleOnChange(){
        if(err){
            setErr(false);
        }
    }
    function handleOnEnter(e){
        if (e.keyCode === 13) {
            handleLoginClick();
        }
    }
    useEffect(()=>{
        const login = document.querySelector('.Login');
        login.scrollIntoView({behavior: "smooth"});
        document.addEventListener('keydown', handleOnEnter);
        return()=>{
            document.removeEventListener('keydown', handleOnEnter);

        }
    })
    return(<div className="Login">
        <input type="text" placeholder="Password" onChange={handleOnChange}/>
        <div className="btn" onClick={handleLoginClick}><b>ENTER</b></div>
        {err && <p className="Login_err">{err}</p>}
    </div>)
}

function Gallery(props){
    const thumbnails = mediaDownloads.map((download,i)=><Thumbnail data={download} key={'Thumbnail_'+i}/>)
    return(<div className="Gallery">
        <section>
            <div className="Gallery__close" onClick={props.hideGallery}>&times;</div>
            {thumbnails}
        </section>
    </div>)
}

function Thumbnail(props){
    const{webIMG, printIMG, caption} = props.data;
    const bgUrl = 'url('+webIMG+')';
    return(<div className="Thumbnail" >
        {/* <div className="Thumbnail__img" style={{backgroundImage:bgUrl}}></div> */}
        <img src={webIMG} alt={caption}/>
        <div className="Thumbnail__btns">
            {caption && <p>{caption}</p>}
            <a href={webIMG} download className="btn"> Download Web Media</a>
            <a href={printIMG} download className="btn"> Download Print Media</a>
        </div>
    </div>)
}
