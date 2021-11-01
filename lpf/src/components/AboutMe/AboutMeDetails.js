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
                My name is Luis Rodriguez, I'm a passionate 22 year old Full Stack Developer based in Choluteca, Honduras, Central America.<br/><br/>
                Building tools from scratch and challenging myself are just some of the stuff i enjoy, been able to solve a problem with code just amazes me,
                not to mention the satisfaction at the end of the day when you were able to solve those problems.<br/><br/>
                I'm always up to date with the latest technologies, trends and best practices, this way we're able to ship the most efficient tools to the public,
                i'm always learning new stuff everyday, having the better tools in your toolbox and improving your skills are some of the things that differ you from the rest.
            </p>
            <AboutMeFacts />
            <NextButton to='/skills' activateClass={'skills'} >Skills</NextButton>
        </div>
    )
}

export default AboutMeDetails