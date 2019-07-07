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
                {projectIndex>=0 && <ProjectsSlider index={projectIndex} setProjectIndex={setProjectIndex}/>}
            </div>
        </section>
    )

}

function displayCurrentProjectsLayout(project,index,cb){
    const { cls, links, desc, imgs, projectName, subpageURL, role} = project;
    return(
        <div className = {`project ${cls}`} key = {`box_${cls}`}  onClick={e => showProjectsSlider(e,index,cb)}>
            <img src={require('./../../../media/logos/'+imgs.logo)} alt={projectName.name} className="project__logo" data-project={cls}/>
            {/* <div className="project__role cover">
                {role.title}
            </div> */}
        </div>
    )
}
function showProjectsSlider(e,index,setProjectIndex){
    setProjectIndex(index);
    const projects = document.querySelector('.projects');
    projects.scrollIntoView({behavior: "smooth",block: "center"});

}
