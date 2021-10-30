import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './Welcome.module.css'

function Welcome(){
    return (<Fragment>
        <div className={styles.welcome}>
            <h1 className={styles.welcome__message}>Hello, my name is Luis Adolfo <br/> I'm a Full Stack Developer</h1>
            <p>Want to know more about me?</p>
            <Link to='/about-me' className={styles['welcome__about-me-button']}><i className="fas fa-play"></i> About Me</Link>
        </div>
        <img className={styles['profile-pic']} src='/pp-bw.png' alt="Luis Rodriguez's Portfolio Pic" />
        <a href='https://www.linkedin.com/in/larl/' target="_blank"  rel="noreferrer" className={styles.linkedIn}><i className="fab fa-linkedin"></i></a>
    </ Fragment>)
}

export default Welcome