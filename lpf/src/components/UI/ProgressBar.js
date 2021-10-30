import React from 'react'
import styles from './ProgressBar.module.css'

function ProgressBar(props){
    return (<div className={styles.progress}>
        <div className={styles.progress__bar}></div>
        <div className={styles.progress__sections}>
            <div className={styles.progress__section}>Main</div>
            <div className={styles.progress__section}>About Me</div>
            <div className={styles.progress__section}>Skills</div>
            <div className={styles.progress__section}>Certifications</div>
            <div className={styles.progress__section}>Projects</div>
            <div className={styles.progress__section}>Contact Me</div>
        </div>
    </div>)
}

export default ProgressBar
