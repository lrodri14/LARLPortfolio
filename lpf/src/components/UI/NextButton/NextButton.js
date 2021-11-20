import React, { useContext } from 'react'
import ProgressContext from '../../../store/progress_context'
import { Link } from 'react-router-dom'
import styles from './NextButton.module.css'

function NextButton(props){
    const ctx = useContext(ProgressContext)

    function clickHandler(event){
        const target = event.target
        ctx.activateSection({
            text: target.textContent,
            class: target.getAttribute('data-activate-class')
        })
    }

    return (<Link to={props.to}
                className={`${styles.button} ${props.className ? props.className : ''}`}
                data-activate-class={props.activateClass}
                onClick={clickHandler}>
                    <i className="fas fa-play"></i>
                    {props.children}
            </Link>)
}

export default NextButton