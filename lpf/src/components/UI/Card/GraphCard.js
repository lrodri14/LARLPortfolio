import React, { useState } from 'react';
import Card from  './Card'
import styles from './GraphCard.module.css'

function GraphCard(props){

    const [expanded, setExpanded] = useState(false)

    function clickHandler(){
        setExpanded((prevState) => {
            return !prevState
        })
    }

    let content = <p>There are no skills to display at the moment</p>

    if (props.skills){
        content = props.skills.map((skill) => {
                    return (
                        <div className={styles['graph']} key={skill.name}>
                            <p>{skill.name} <i className={skill.icon}></i></p>
                            <div className={styles['graph__labels']}>
                                <p className={`${styles['graph__labels__label']} ${styles['minimun']}`}>Novice</p>
                                <p className={`${styles['graph__labels__label']} ${styles['maximum']}`}>Expert</p>
                            </div>
                            <div className={styles['graph__bar']} style={{width: `${skill.expertise}%`}}></div>
                        </div>
                    )
                })
    }

    return (
        <Card onClick={clickHandler} className={!expanded ? styles['graph-card'] : props.className}>
            <h2>{props.category}</h2>
            {expanded && content}
            <p>Click me to visualize/hide detailed information</p>
        </Card>
    )
}

export default GraphCard
