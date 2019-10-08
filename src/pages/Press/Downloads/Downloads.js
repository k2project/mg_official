import React, { useState, useEffect } from 'react';
import './Downloads.scss';
import {mediaDownloads} from './mediaDownloads';
import loader from '../../../media/icons/loader.png';

export default function Downloads (){
    const[link, showLink] = useState(true);
    const[login, showLogin] = useState(false);
    const[gallery, showGallery] = useState(false);
    function handleLinkClick(){
        showLink(false);
        showLogin(true);
    }
    function loadGallery(){
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
        {link && <section className="Downloads__link" onClick={handleLinkClick}>Download Press Materials.</section>}
        {login && <Login loadGallery={ loadGallery }/>}
        {gallery && <Gallery hideGallery={hideGallery}/>}
    </div>)
}

function Login(props){
    const[err, setErr] = useState(false)
    function handleLoginClick(){

        const input = document.querySelector('.Login input');
        if(input.value){
            if(process.env.REACT_APP_LOGIN_PASS === input.value.trim()){
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
    const{webIMG, printIMG, caption, details} = props.data;
    const[imgLoaded, setImgToLoaded] = useState(false)
    function loadingImg(){
        setImgToLoaded(true)

    }
    return(
        <div>
            <div className="Thumbnail" >
                <img src={webIMG} alt={caption} onLoad={loadingImg}/>
                <div className="Thumbnail__btns">
                    <div>
                        {caption && <p>{caption}</p>}
                        {details && <i>{details}</i>}
                    </div>
                    <a href={webIMG} download className="btn"> Download Web Media</a>
                    <a href={printIMG} download className="btn"> Download Print Media</a>
                </div>
                {!imgLoaded && <div className="Thumbnail__loader">
                    <img src={loader} alt='Loading...'/>
                    <p>Loading...</p>
                </div>}
            </div>

        </div>
    )
}
