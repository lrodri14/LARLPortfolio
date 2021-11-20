import React, { Fragment } from 'react'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import ProjectCard from '../components/UI/Card/ProjectCard'
import styles from './Projects.module.css'


const projects = [
    {
         name: 'Sealena',
         startDate:'June 6, 2020',
         endDate:'September 4, 2021',
         url:'https://www.sealena.com',
         description:"Sealena it's a Medical Information Management and Collaboration tool that helps Health Workers organize and communicate with their patients and colleagues easily."
    },
]

function Projects(){
    return (
        <Fragment>
            <Board>
                {projects.map((project) => {
                    return (
                        <ProjectCard key={project.name} name={project.name} startDate={project.startDate} endDate={project.endDate} url={project.url} description={project.description}/>
                    )
                })}
            </Board>
            <NextButton to='/contact-me' activateClass='contact-me' className={styles['next-button']}>Contact Me</NextButton>
        </Fragment>
    )
}

export default Projects