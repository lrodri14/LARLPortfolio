import React, { useState } from 'react'
import styles from './Card.module.css'

function Card(props){
    const [isActive, setIsActive] = useState(false);

    function toggleActiveHandler(){
        setIsActive((prevState) => {
            return !prevState
        })
    }

    return (
            <div className={`${styles.card} ${isActive && styles['card--active']}`} onMouseEnter={toggleActiveHandler} onMouseLeave={toggleActiveHandler}>
                {props.children}
            </div>
    )
}

export default Card
