import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NextButton.module.css'

function NextButton(props){

    return (<Link to={props.to}
                className={`${styles.button} ${props.className ? props.className : ''}`}
                data-activate-class={props.activateClass}>
                    <i className="fas fa-play"></i>
                    {props.children}
            </Link>)
}

export default NextButton