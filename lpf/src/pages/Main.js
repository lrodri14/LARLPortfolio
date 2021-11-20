import React, { Fragment } from 'react'
import NextButton from '../components/UI/NextButton/NextButton'
import pp from '../images/pp-bw.png'
import styles from './Main.module.css'


function Main(){
    return (
        <Fragment>
            <div className={styles.welcome}>
                <h1 className={styles.welcome__message}>Hello, my name is Luis Adolfo <br/> I'm a Full Stack Developer</h1>
                <p>Want to know more about me?</p>
                <NextButton to='/about-me' activateClass='about-me'>About Me</NextButton>
            </div>
            <img className={styles['profile-pic']} src={pp} alt="Luis Rodriguez's Portfolio Pic" />
            <a href='https://www.linkedin.com/in/larl/' target="_blank" rel="noreferrer" className={styles.linkedIn}><i className="fab fa-linkedin"></i></a>
        </ Fragment>
    )
}

export default Main