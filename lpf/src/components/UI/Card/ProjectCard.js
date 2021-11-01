import React from 'react'
import Card from './Card'
import sealenaLogo from '../../../images/sealena-logo.png'
import styles from './ProjectCard.module.css'

function ProjectCard(props){

    return (
            <Card>
                <img src={sealenaLogo} alt="" className={styles['project-card__logo']} />
                <h2>{props.name}</h2>
                <div className={styles['project-card__details']}>
                    <p>Start Date: {props.startDate}</p>
                    <p>End Date: {props.endDate}</p>
                    <p>{props.description}</p>
                    <p>Go to: <a href={props.url} target="_blank" rel="noreferrer" className={styles['project-card__details__url']}>{props.url}</a></p>
                </div>
            </Card>
    )
}

export default ProjectCard