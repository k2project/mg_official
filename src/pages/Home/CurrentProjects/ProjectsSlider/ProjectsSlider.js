import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './ProjectsSlider.scss';
import {currentProjects} from './../../../../api/projects';
import {slideToLeft, slideToRight,handleTouchStart, handleTouchMove, slidingUsingArrowsKeys} from './../../../../api/funs';

import facebook from './../../../../media/icons/facebook.png';
import twitter from './../../../../media/icons/twitter.png';
import instagram from './../../../../media/icons/instagram.png';

//for swipping
let xDown = null;
let yDown = null;
export default function ProjectsSlider ( props ){

    const {index, setProjectIndex} = props;
    const [currentIndex, setCurrentIndex] = useState(index);
    const [xDown, setxDown] = useState(null);
    const [yDown, setyDown] = useState(null);

    useEffect(()=>{
        const el = document.querySelector('.projectDetails');
        const stateData = {
            arr:currentProjects,
            el,
            rightKey:true,
            leftKey:true,
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

        const handleKeyDown = function(e){
            slidingUsingArrowsKeys(e,stateData);
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            el.removeEventListener('touchstart', runHandleTouchStart);
            el.removeEventListener('touchmove', runHandleTouchMove);
            document.removeEventListener('keydown', handleKeyDown);
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
    const handleSlidingToRight = function(){
        slideToRight(currentProjects,document.querySelector('.projectDetails'), currentIndex,setCurrentIndex)
    }
    const handleSlidingToLeft = function(){
        slideToLeft(currentProjects,document.querySelector('.projectDetails'), currentIndex,setCurrentIndex)
    }
    return <div className="projectsDetails__nav">
        <div className="projectsDetails__nav_lft" onClick={handleSlidingToLeft}>&#10148;</div>
        <div className="projectsDetails__nav_rgt" onClick={handleSlidingToRight}>&#10148;</div>
        <div className="projectsDetails__nav_close" onClick={()=>closeProjectSlider(setProjectIndex) }>&#10006;</div>
    </div>
}
function closeProjectSlider(setProjectIndex){
    setProjectIndex(-1);
    const ps = document.querySelector('.projects');
    ps.style.display ='grid';
}


// const page  = projectIndex + 1;
// document.querySelector('.projectDetails__pagination').textContent = page +' / '+currentProjects.length;
