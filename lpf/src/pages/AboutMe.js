import React, { Fragment } from 'react'
import AboutMeDetails from '../components/AboutMe/AboutMeDetails'
import aboutMePp from '../images/about-me-pp.png'
import styles from './AboutMe.module.css'

function AboutMe(){
    return (
        <Fragment>
            <img src={aboutMePp} alt="LARLPortfolio profile pic" className={styles['about-me-profile-pic']} />
            <AboutMeDetails/>
        </Fragment>
    )
}

export default AboutMe