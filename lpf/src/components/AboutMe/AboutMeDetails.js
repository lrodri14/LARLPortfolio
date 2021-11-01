import React from 'react'
import AboutMeFacts from './AboutMeFacts'
import NextButton from '../UI/NextButton'
import styles from './AboutMeDetails.module.css'

function AboutMeDetails(){
    return (
        <div className={styles.details}>
            <h1>About Me</h1>
            <hr className={styles.details__divider}/>
            <p className={styles.details__message}>
                My name is Luis Rodriguez, I'm a passionate Full Stack Developer with {new Date().getFullYear() - 2019} years of experience
                based in Choluteca, Honduras, Central America.<br/><br/>
                My love for development came from a really young age, seeing my dad design
                and create tools with code from scratch was something that amazed me, so {new Date().getFullYear() - 2019} years ago i decided to break
                into the field.<br/><br/>
                Challenging myself and learning new stuff everyday are just some of the things that i enjoy. I'm always up to date with the latest technologies
                and best practices so i can ship with the most efficient software.
            </p>
            <AboutMeFacts />
            <NextButton to='/skills' activateClass={'skills'}>Go to Skills</NextButton>
        </div>
    )
}

export default AboutMeDetails