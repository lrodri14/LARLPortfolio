import React from 'react'
import styles from './AboutMeFacts.module.css'

function AboutMeFacts(){
    return (
        <div className={styles['about-me-facts']}>
            <div>
                <ul>
                    <li>Name: Luis Adolfo Rodriguez Lopez</li>
                    <li>Age: {new Date().getFullYear() - 2000}</li>
                    <li>Phone: +504-3309-9408</li>
                    <li>Experience: {new Date().getFullYear() - 2019} years</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Country: Honduras</li>
                    <li>City: Choluteca</li>
                    <li>Available for Work: Yes</li>
                    <li>LinkedIn: www.linkedin.com/in/larl/</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMeFacts