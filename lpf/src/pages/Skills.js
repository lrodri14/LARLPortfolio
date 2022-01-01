import React, { Fragment } from 'react'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import GraphCard from '../components/UI/Card/GraphCard'
import styles from './Skills.module.css'

function Skills(){
        return (
        <Fragment>
            <Board className={styles['skills-board']}>
                <GraphCard category='Speaking Languages' className={styles['speaking-languages-card']} url='speaking_languages/'/>
                <GraphCard category='Tools and Technologies' className={styles['tools-and-tech-card']} url='tools/'/>
                <GraphCard category='Industry Knowledge' className={styles['industry-knowledge-card']} url='industry_knowledge/'/>
            </Board>
            <NextButton to='/certifications' activateClass='certifications' className={styles['next-button']}>Certifications</NextButton>
        </Fragment>
    )
}

export default Skills