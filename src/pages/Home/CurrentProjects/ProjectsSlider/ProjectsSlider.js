import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './ProjectsSlider.scss';
import {currentProjects} from './../../../../api/projects';

import facebook from './../../../../media/icons/facebook.png';
import twitter from './../../../../media/icons/twitter.png';
import instagram from './../../../../media/icons/instagram.png';

//for swipping
var xDown = null;
var yDown = null;
export default function ProjectsSlider ( props ){
    const {index, setProjectIndex} = props;
    const [currentIndex, setCurrentIndex] = useState(index);

    useEffect(()=>{
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
        <div className="ProjectsSlider cover">
            {displayProjectLayout(project)}
            <ProjectsSliderNavBar setProjectIndex={setProjectIndex} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
            {/* <div className="projectDetails__pagination"></div> */}
        </div>
    )
}

function displayProjectLayout(project){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    return(
        <div key={`projectsDetails_${cls}`} className={"projectsDetails "+cls}>
            <div className='projectDetails_lft'>
                <div>
                    <p className="details__name">{projectName.name}</p>
                    <p className="details__role color_themed">{role.title}</p>
                    {role.subtitle && <p className="details__subrole color_themed">{role.subtitle}</p>}
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
        <div className="projectsDetails__nav_close" onClick={()=> setProjectIndex(-1)}>&#10006;</div>
    </div>
}

function slideToRight(index,cb){
    ++index;
    if(index>currentProjects.length-1){
        index = 0;
    }
    cb(index);
}
function slideToLeft(index,cb){
    --index;
    if(index<0){
        index = currentProjects.length-1;
    }
    cb(index);
    document.querySelector('.projectsDetails').classList.add('left');
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
function getTouches(e) {
  return e.touches ||             // browser API
         e.originalEvent.touches; // jQuery
}

function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function handleTouchMove(e,  currentIndex, setCurrentIndex) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            console.log('swiping rght')
            slideToRight(currentIndex,setCurrentIndex)
        } else {
            slideToLeft(currentIndex,setCurrentIndex)
        }
    }

    /* reset values */
    xDown = null;
    yDown = null;
};
