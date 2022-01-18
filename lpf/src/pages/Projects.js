import React, { Fragment, useEffect } from 'react'
import useHttp from '../hooks/useHttp'
import LoadingText from '../components/UI/LoadingText/LoadingText'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import ProjectCard from '../components/UI/Card/ProjectCard'
import styles from './Projects.module.css'

function Projects(){
    const {isLoading, error, response: projects, sendRequest} = useHttp()

    useEffect(() => {
        sendRequest({endPoint: 'projects/'})
    }, [sendRequest])

    return (
        <Fragment>
            {!isLoading && !error &&
                <Fragment>
                    <Board>
                        {projects && projects.map((project) => {
                            return (
                                <ProjectCard key={project.name} project={project}/>
                            )
                        })}
                    </Board>
                    <NextButton to='/contact-me' activateClass='contact-me' className={styles['next-button']}>Contact Me</NextButton>
                </Fragment>
            }
            {isLoading && <LoadingText category={'Projects'}/>}
        </Fragment>
    )
}

export default Projects