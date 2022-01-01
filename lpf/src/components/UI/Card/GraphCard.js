import React, { useState, useEffect } from 'react';
import useHttp from '../../../hooks/useHttp'
import Card from  './Card'
import styles from './GraphCard.module.css'

function GraphCard(props){

    const { url } = props
    const [expanded, setExpanded] = useState(false)
    const { isLoading, error, response, sendRequest } = useHttp()

    useEffect(() => {
        sendRequest({endPoint: url})
    }, [sendRequest, url])

    function clickHandler(){
        setExpanded((prevState) => {
            return !prevState
        })
    }

    let content = <p>There are no skills to display at the moment</p>

    if (response.length > 0){
        content = response.map((skill) => {
                    return (
                        <div className={styles['graph']} key={skill.name}>
                            <p>{skill.name} <i className={skill.icon}></i></p>
                            <div className={styles['graph__labels']}>
                                <p className={`${styles['graph__labels__label']} ${styles['minimun']}`}>Novice</p>
                                <p className={`${styles['graph__labels__label']} ${styles['maximum']}`}>Expert</p>
                            </div>
                            <div className={styles['graph__bar']} style={{width: `${skill.expertise_level}%`}}></div>
                        </div>
                    )
                })
    }

    return (
        <Card onClick={clickHandler} className={!expanded ? styles['graph-card'] : props.className}>
            <h2>{props.category}</h2>
            {expanded && !isLoading && !error && response && content}
            {error && expanded &&  <p>{error}</p>}
            {isLoading && expanded && <p>{`Loading ${props.category}...`}</p>}
            {!expanded && <p>Click me to visualize/hide detailed information</p>}
        </Card>
    )
}

export default GraphCard
