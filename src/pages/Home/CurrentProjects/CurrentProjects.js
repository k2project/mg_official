import React, {useState} from 'react';

import './CurrentProjects.scss';
import {currentProjects} from './../../../api/projects';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';


export default function CurrentProjects (){
    const [projectIndex, setProjectIndex] = useState(-1);
    const projects = currentProjects.map((project,index)=>displayCurrentProjectsLayout(project,index, setProjectIndex));
    return(
        <section className="CurrentProjects" id="projects">
            <div className="projects">
                {projects}
            </div>
            {projectIndex>=0 && <ProjectsSlider index={projectIndex} setProjectIndex={setProjectIndex}/>}
        </section>
    )

}

function displayCurrentProjectsLayout(project,index,cb){
    const { cls, imgs, projectName} = project;
    return(
        <div className = {`project ${cls}`} key = {`box_${cls}`}  onClick={e => showProjectsSlider(e,index,cb)}>
            <img src={require('./../../../media/logos/'+imgs.logo).default} alt={projectName.name} className="project__logo" data-project={cls}/>
           
        </div>
    )
}
function showProjectsSlider(e,index,setProjectIndex){
    setProjectIndex(index);
    const ps = document.querySelector('.projects');
    ps.style.display ='none';
    setTimeout(()=>{
        const slider = document.querySelector('.ProjectsSlider');
        slider.scrollIntoView({behavior: "smooth",block: "center"});
    },100)

}
