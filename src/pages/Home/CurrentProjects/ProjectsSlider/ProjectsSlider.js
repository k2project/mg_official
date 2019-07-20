import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './ProjectsSlider.scss';
import {currentProjects} from './../../../../api/projects';
import {swippingCTRL} from './../../../../api/funs';

import facebook from './../../../../media/icons/facebook.png';
import twitter from './../../../../media/icons/twitter.png';
import instagram from './../../../../media/icons/instagram.png';

//for swipping
let xDown = null;
let yDown = null;
export default function ProjectsSlider ( props ){
    const {index, setProjectIndex} = props;
    const [currentIndex, setCurrentIndex] = useState(index);

    useEffect(()=>{
        //sipping fun for current project slider
        // const cpsCTRL = new swippingCTRL(document.querySelector('.projectDetails'),currentProjects,currentIndex,setCurrentIndex);
        // document.addEventListener('touchstart', cpsCTRL.handleTouchStart);
        // document.addEventListener('touchmove',e=>cpsCTRL.handleTouchMove(e,currentIndex, setCurrentIndex));



        const handleKeyDown = function(e){
            slideProjectsListUsingArrowsKeys(e,currentIndex,setCurrentIndex);
        }
        const runHandleTouchMove = function(e){
            handleTouchMove(e,currentIndex,setCurrentIndex);
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', runHandleTouchMove);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', runHandleTouchMove);
        }
    })
    let  project = currentProjects[currentIndex];
    return(
        <div className="ProjectsSlider">
            {displayProjectLayout(project)}
            <ProjectsSliderNavBar setProjectIndex={setProjectIndex} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
            {/* <div className="projectDetails__pagination"></div> */}
        </div>
    )
}

function displayProjectLayout(project){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    return(
        <div key={`projectDetails_${cls}`} className={"projectDetails cover "+cls}>
            <div className='projectDetails_lft'>
                <div>
                    <p className="details__name">{projectName.name}</p>
                    <p className="details__role color_themed">{role.title}</p>
                    {role.subtitle && <p className="details__subrole color_themed">{role.subtitle}</p>}
                </div>
                <div>
                    <p className="details__desc">{desc}</p>
                </div>
                <div>
                    {subpageURL && <NavLink to={subpageURL} exact className="details__btn btn">Find Out More</NavLink>}
                    {!subpageURL && <a href={links.website} target="_blank"  rel="noopener noreferrer" className="details__btn btn">Website</a>}
                </div>


            </div>
            <div className='projectDetails_rgt'>
                <img src={require('./../../../../media/logos/'+imgs.logo)} alt={`${projectName.name} logo`} className="details__logo"/>
                <div className="details__links">
                    {links && links.facebook && <a href={links.facebook} target="_blank"  rel="noopener noreferrer"> <img src={facebook} alt="facebook logo"/></a>}
                    {links && links.twitter && <a href={links.twitter}  target="_blank"  rel="noopener noreferrer"> <img src={twitter} alt="twitter logo"/></a>}
                    {links && links.instagram && <a href={links.instagram}  target="_blank"  rel="noopener noreferrer"><img src={instagram} alt="instagram logo"/></a>}
                </div>
            </div>

        </div>
    )
}

function ProjectsSliderNavBar(props){
    const {setProjectIndex, setCurrentIndex, currentIndex} = props;
    return <div className="projectsDetails__nav">
        <div className="projectsDetails__nav_lft" onClick={()=>slideToLeft(currentIndex,setCurrentIndex)}>&#10148;</div>
        <div className="projectsDetails__nav_rgt" onClick={()=>slideToRight(currentIndex,setCurrentIndex)}>&#10148;</div>
        <div className="projectsDetails__nav_close" onClick={()=>closeProjectSlider(setProjectIndex) }>&#10006;</div>
    </div>
}
function closeProjectSlider(setProjectIndex){
    setProjectIndex(-1);
    const ps = document.querySelector('.projects');
    ps.style.display ='grid';
}
function slideToRight(index,cb){
    ++index;
    if(index>currentProjects.length-1){
        index = 0;
    }
    cb(index);
    document.querySelector('.projectDetails').classList.add('right');
}
function slideToLeft(index,cb){
    --index;
    if(index<0){
        index = currentProjects.length-1;
    }
    cb(index);
    document.querySelector('.projectDetails').classList.add('left');
}


// const page  = projectIndex + 1;
// document.querySelector('.projectDetails__pagination').textContent = page +' / '+currentProjects.length;

//handle arrows
function slideProjectsListUsingArrowsKeys(e, currentIndex, setCurrentIndex){
    if (e.code === 'ArrowLeft') {
        e.preventDefault();
        // left arrow
        slideToLeft(currentIndex,setCurrentIndex)
    }
    if (e.code === 'ArrowRight') {
        e.preventDefault();
        // right arrow
        slideToRight(currentIndex,setCurrentIndex)
    }

}
//handle swipping
function handleTouchStart(e) {
    const firstTouch = e.touches[0] || e.originalEvent.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function handleTouchMove(e,  currentIndex, setCurrentIndex) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            slideToRight(currentIndex,setCurrentIndex)
        } else {
            slideToLeft(currentIndex,setCurrentIndex)
        }
    }

    /* reset values */
    xDown = null;
    yDown = null;
};
