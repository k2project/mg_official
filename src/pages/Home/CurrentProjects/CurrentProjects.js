import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './CurrentProjects.scss';
import {currentProjects} from './../../../api/projects';

import facebook from './../../../media/icons/facebook.png';
import twitter from './../../../media/icons/twitter.png';
import instagram from './../../../media/icons/instagram.png';

let projectIndex = 0;
//for sliding and arrow navigation
let projectsDetailsShown = false;
//for swapping
var xDown = null;
var yDown = null;
export default function CurrentProjects (){
    const projects = currentProjects.map((project,index)=>displayCurrentProjects(project,index));

    useEffect(()=>{
        const introAnim = setTimeout(runIntroAnim,3500);
        document.addEventListener('keydown', slideProjectDetailsListUsingArrowsKeys);
        window.addEventListener('resize', closeProjectDetails);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        return ()=>{
            clearTimeout(introAnim);
            document.removeEventListener('keydown', slideProjectDetailsListUsingArrowsKeys);
            window.removeEventListener('resize', closeProjectDetails);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
        }
    })


    return(
        <section className="CurrentProjects" id="projects">
            <div className="projects">
                {projects}
                <ProjectsDetails/>
            </div>
            <div>
                <div className="btn CurrentProjects__btn" onClick={showHomeHiddenEl}>Past Projects</div>
            </div>
        </section>
    )

}
function runIntroAnim(){
    const initAnim = document.querySelector('.Home').classList.contains('not_anim');
    if(!initAnim){
        const currentProjectsEl = document.querySelector('.CurrentProjects');
        currentProjectsEl.style.display = 'grid';
        const projects = document.querySelectorAll('.project');
        projects.forEach((project, index)=>{
            setTimeout(()=>{
                project.style.opacity = 1;
                project.style.top = 0;
            }, index*100+50)
        })
    }


}
function displayCurrentProjects(project,index){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    const { name }= projectName;
    const logo = imgs.logo ? <img src={require('./../../../media/logos/'+imgs.logo)}
                                    alt={name}
                                    className="project__logo"
                                    data-project={cls}/> :
                            <div className="project__logo bg__sqr font_themed"   data-project={cls}>{name}</div>    ;

    return(
        <div className = {`project ${cls}`} key = {`box_${cls}`}>
            <div className="cover">
                {logo}
                <div className="project__role cover" onClick={() => displayProjectsDeatils(index)} >
                    {role.title}
                </div>
            </div>

        </div>
    )
}
function displayProjectsDeatils(index){
    projectsDetailsShown = true;
    projectIndex = index;
    const projects = document.querySelector('.projects');
    projects.scrollIntoView({behavior: "smooth",block: "center"});
    const detailsBox = document.querySelector('.projectsDetails__box');
    detailsBox.style.display = 'block';
    const projectBoxW = projects.offsetWidth;
    const projectDetailsUl = document.querySelector('.projectsDetails__box ul');
    projectDetailsUl.style.width = projectBoxW * currentProjects.length + 'px';
    slideProjectDetailsList(projectIndex, projectBoxW);

}
function slideProjectDetailsList(index){
    const projectBoxW = document.querySelector('.projects').offsetWidth;
    const projectDetailsUl = document.querySelector('.projectsDetails__box ul');
    if(index<0){
        projectIndex = currentProjects.length-1;
    }
    if(index>currentProjects.length-1){
        projectIndex = 0;
    }
    projectDetailsUl.style.left = -1 * projectBoxW * projectIndex + 'px';

    const page  = projectIndex + 1;
    document.querySelector('.projectDetails__pagination').textContent = page +' / '+currentProjects.length;

}
function ProjectsDetails(){
    const projectsDetailsList = currentProjects.map(project=>displayProjectDetails(project));
    return(
        <div className="projectsDetails__box cover">
            <ul>{projectsDetailsList}</ul>
            <div className="projectsDetails__nav">
                <div className="projectsDetails__nav_lft" onClick={()=>slideProjectDetailsList(--projectIndex)}>&#10148;</div>
                <div className="projectsDetails__nav_rgt" onClick={()=>slideProjectDetailsList(++projectIndex)}>&#10148;</div>
                <div className="projectsDetails__nav_close" onClick={closeProjectDetails}>&#10006;</div>
            </div>
            <div className="projectDetails__pagination"></div>
        </div>
    )
}
function closeProjectDetails(){
    document.querySelector('.projectsDetails__box').style.display = 'none';
    projectsDetailsShown = false;
}
function displayProjectDetails(project){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    return(
        <li key={`projectsDetails_li_${cls}`} className={"projectsDetails__li "+cls}>
            <div className="cover">
                <div className='projectDetails_lft'>
                    <p className="details__name">{projectName.name}</p>
                    <p className="details__role color_themed">{role.title}</p>
                    {role.subtitle && <p className="details__subrole color_themed">{role.subtitle}</p>}
                    <p className="details__desc">{desc}</p>
                    {subpageURL && <NavLink to={subpageURL} exact className="details__btn btn">Find Out More</NavLink>}
                    {!subpageURL && <a href={links.website} target="_blank"  rel="noopener noreferrer" className="details__btn btn">Website</a>}


                </div>
                <div className='projectDetails_rgt'>
                    { imgs.logo && <div className="details__logo "><img src={require('./../../../media/logos/'+imgs.logo)} alt={`${projectName.name} logo`}/></div>}
                    <div className="details__links">
                        {links && links.facebook && <a href={links.facebook} target="_blank"  rel="noopener noreferrer"> <img src={facebook} alt="facebook logo"/></a>}
                        {links && links.twitter && <a href={links.twitter}  target="_blank"  rel="noopener noreferrer"> <img src={twitter} alt="twitter logo"/></a>}
                        {links && links.instagram && <a href={links.instagram}  target="_blank"  rel="noopener noreferrer"><img src={instagram} alt="instagram logo"/></a>}
                    </div>
                </div>

            </div>
        </li>
    )
}
function showHomeHiddenEl(e){
    e.target.remove();
    const hiddenEl = document.querySelector('.Home__hidden')
    hiddenEl.style.display = 'block';
    hiddenEl.scrollIntoView(true);
    // window.scrollBy(0,document.documentElement.clientHeight-200);

    const pastProjectsShown = sessionStorage.getItem('pastProjectsShown');
    if(pastProjectsShown){
        document.querySelector('.Home').classList.add('pastProjects_shown');
    }else{
        sessionStorage.setItem('pastProjectsShown', 'true');
    }

}
//handle arrows

function slideProjectDetailsListUsingArrowsKeys(e){
    if(projectsDetailsShown){

        if (e.code === 'ArrowLeft') {
            e.preventDefault();
            // left arrow
            slideProjectDetailsList(--projectIndex)
        }
        if (e.code === 'ArrowRight') {
            e.preventDefault();
            // right arrow
            slideProjectDetailsList(++projectIndex)
        }
    }

}
//handle sipping

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if(projectsDetailsShown){
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                slideProjectDetailsList(++projectIndex);
            } else {
                slideProjectDetailsList(--projectIndex);
            }
        }
    }

    /* reset values */
    xDown = null;
    yDown = null;
};
