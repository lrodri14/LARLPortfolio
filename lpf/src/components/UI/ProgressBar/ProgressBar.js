import React, { useContext } from 'react'
import ProgressContext from '../../../store/progress_context'
import styles from './ProgressBar.module.css'

function ProgressBar(props){
    const ctx = useContext(ProgressContext)
    return (<div className={styles.progress}>
        <div className={`${styles.progress__bar} ${styles[ctx.activeSection.class]}`}></div>
        <div className={styles.progress__sections}>
            <div className={styles.progress__section}>{ctx.activeSection.text}</div>
        </div>
    </div>)
}

export default ProgressBar
