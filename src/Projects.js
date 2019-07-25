import React from 'react';
import PROJECTS from './assets/data/project';

const Project = (props) => {
    
        const { title, description, link, image } = props.project;

        return (
            <div style={{display:'inline-block',width:300,margin:10}}>
                <h2>{title}</h2>
                <img src={image} style={{width:200}} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }

const Projects = () => {

        return (
            <div style={{textAlign:"center"}}>
                <h1>Highlighted Projects</h1>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
   
}

export default Projects;