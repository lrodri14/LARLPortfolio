import React, { Fragment, useState, useEffect } from 'react'
import useHttp from "../../../hooks/useHttp";
import Card from "./Card";
import styles from './GraphCard.module.css'

function GraphCard(props){

    // Constants
    const { url, category } = props
    const { isLoading, error, success, data, sendRequest } = useHttp()

    // States
    const [expanded, setExpanded] = useState(false)

    // Effects
    useEffect(() => {
        sendRequest({url: url})
    }, [])

    // Handlers
    const clickHandler = () => {
        setExpanded((prevState) => {
            return !prevState
        })
    }

    return (
        <Card onClick={clickHandler} className={!expanded ? styles['graph-card'] : props.className}>
            <h2>{category}</h2>
            {!expanded && <p>Click me to visualize/hide detailed information</p>}
            {error && expanded &&  <p>{error}</p>}
            {isLoading && expanded && <p>{`Loading ${category}...`}</p>}
            {expanded && data && data.map((skill, index) => {
                return (
                    <div className={styles['graph']} key={skill.name}>
                        <p>{skill.name} <i className={`${skill.icon}`}></i></p>
                        <div className={styles['graph__labels']}>
                            <p className={`${styles['graph__labels__label']} ${styles['minimun']}`}>Novice</p>
                            <p className={`${styles['graph__labels__label']} ${styles['maximum']}`}>Expert</p>
                        </div>
                        <div className={styles['graph__bar']} style={{width: `${skill.expertise_level}%`}}></div>
                    </div>
                )
            })}
        </Card>
    )

}

export default GraphCard
