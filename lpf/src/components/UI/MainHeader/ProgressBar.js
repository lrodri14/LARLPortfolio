import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ProgressBar.module.css'

function ProgressBar(props){
    const location = useLocation()
    const pathname = location.pathname !== '/' ? location.pathname : 'main'
    const activeSectionClass = pathname.replace('/', '')
    let activeSectionText = activeSectionClass.replace('-', ' ').split(' ')
    activeSectionText = activeSectionText.map((word) => {
        return word[0].toUpperCase() + word.substring(1)
    })
    activeSectionText = activeSectionText.toString().replace(',', ' ')
    return (<div className={styles.progress}>
        <div className={`${styles.progress__bar} ${styles[activeSectionClass]}`}></div>
        <div className={styles.progress__sections}>
            <div className={styles.progress__section}>{activeSectionText}</div>
        </div>
    </div>)
}

export default ProgressBar
