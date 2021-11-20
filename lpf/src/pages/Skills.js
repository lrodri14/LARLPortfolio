import React, { Fragment } from 'react'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import GraphCard from '../components/UI/Card/GraphCard'
import styles from './Skills.module.css'

const categories = ['Speaking Languages', 'Tools and Technologies', 'Industry Knowledge']
const skills = {
    languages: [{name: 'Spanish', expertise: 100, icon: 'fab fa-python'}, {name: 'English', expertise: 75, icon: 'fab fa-python'}],
    tools: [{toolType: 'Language', name: 'Python', expertise: 100, icon: 'fab fa-python'},
            {toolType: 'Framework', name: 'Django', expertise: 75, icon: 'fab fa-python'},
            {toolType: 'Language', name: 'Javascript', expertise: 75, icon: 'fab fa-python'},
            {toolType: 'Library', name: 'React', expertise: 75, icon: 'fab fa-python'},
            {toolType: 'Language', name: 'HTML/CSS', expertise: 100, icon: 'fab fa-python'},
            {toolType: 'Library', name: 'D3.js', expertise: 25, icon: 'fab fa-python'},
            ],
    industryKnowledge: [{name: 'Web Development', expertise: 75, icon: 'fab fa-python'}]
}

function Skills(){
    return (
        <Fragment>
            <Board className={styles['skills-board']}>
                <GraphCard category={categories[0]} className={styles['speaking-languages-card']} skills={skills.languages}/>
                <GraphCard category={categories[1]} className={styles['tools-and-tech-card']} skills={skills.tools}/>
                <GraphCard category={categories[2]} className={styles['industry-knowledge-card']} skills={skills.industryKnowledge}/>
            </Board>
            <NextButton to='/certifications' activateClass='certifications' className={styles['next-button']}>Certifications</NextButton>
        </Fragment>
    )
}

export default Skills