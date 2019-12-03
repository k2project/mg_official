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
        {/* {gallery && <Gallery hideGallery={hideGallery}/>} */}
        <Gallery hideGallery={hideGallery}/>}
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
        <div className="Gallery__close" onClick={props.hideGallery}>&times;</div>
        <section>
            {thumbnails}
        </section>
    </div>)
}

function Thumbnail(props){
    const{caption, orientation, original, large, medium, small} = props.data;
    const[imgLoaded, setImgToLoaded] = useState(false)
    function loadingImg(){
        setImgToLoaded(true)

    }

    return(
        <div className="Thumbnail" >
            <div className="Thumbnail__imgs">
                <img src={small.src} alt={caption} onLoad={loadingImg} className={"Thumbnail__img Thumbnail__img_"+ orientation} />
            </div>
            <div className="Thumbnail__btns">
                <div>
                    {caption && <p>{caption}</p>}
                </div>

                <a href={original.src} download className="btn"> Original Size ( {original.size} )</a>
                <a href={large.src} download className="btn"> Large Size ( {large.size} )</a>
                <a href={medium.src} download className="btn"> Medium Size ( {medium.size} )</a>
                <a href={small.src} download className="btn"> Small Size ( {small.size} )</a>

            </div>
            {!imgLoaded && <div className="Thumbnail__loader">
                <img src={loader} alt='Loading...'/>
                <p>Loading...</p>
            </div>}
        </div>

    )
}
