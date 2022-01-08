import React from 'react'
import styles from './LoadingText.module.css'

function LoadingText(props){
    const text = `Loading ${props.category}...`
    return <p className={styles['loading-text']}>{text}</p>
}

export default LoadingText