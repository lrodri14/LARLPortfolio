import React, { useState } from 'react'
import Card from './Card'
import styles from './ProjectCard.module.css'

function ProjectCard(props){

    const [flip, setFlip] = useState(false)
    const { project } = props

    function projectClickHandler(){
        setFlip((prevState) => {
            return !prevState
        })
    }

    function linkClickHandler(event){
        event.stopPropagation()
    }

    return (
            <Card className={`styles['project-card'] ${flip && styles['project-card__rotate']}`} onClick={projectClickHandler}>
                {!flip &&
                    <div className={styles['project-card__details']}>
                        <img src={project.logo} alt="" className={styles['project-card__logo']} />
                        <h2>{project.name}</h2>
                        <p><i className="fas fa-hourglass-start"></i> {project.start_date}</p>
                        <p><i className="fas fa-hourglass-end"></i> {project.end_date}</p>
                        <p>Go to: <a href={project.url} target="_blank" rel="noreferrer" onClick={linkClickHandler}>{project.url}</a></p>
                    </div>
                }
                {flip &&
                    <div className={styles['project-card__description']}>
                        <img src={project.logo} alt="" className={styles['project-card__logo']} />
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                }
            </Card>
    )
}

export default ProjectCard