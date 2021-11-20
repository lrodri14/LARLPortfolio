import React, { useState } from 'react'
import Card from './Card'
import sealenaLogo from '../../../images/sealena-logo.png'
import styles from './ProjectCard.module.css'

function ProjectCard(props){

    const [flip, setFlip] = useState(false)

    function projectClickHandler(){
        setFlip((prevState) => {
            return !prevState
        })
    }

    return (
            <Card className={`styles['project-card'] ${flip && styles['project-card__rotate']}`} onClick={projectClickHandler}>
                {!flip &&
                    <div className={styles['project-card__details']}>
                        <img src={sealenaLogo} alt="" className={styles['project-card__logo']} />
                        <h2>{props.name}</h2>
                        <p><i className="fas fa-hourglass-start"></i> {props.startDate}</p>
                        <p><i className="fas fa-hourglass-end"></i> {props.endDate}</p>
                        <p>Go to: <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a></p>
                    </div>
                }
                {flip &&
                    <div className={styles['project-card__description']}>
                        <img src={sealenaLogo} alt="" className={styles['project-card__logo']} />
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                }
            </Card>
    )
}

export default ProjectCard