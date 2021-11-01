import React from 'react'
import styles from './Skills.module.css'

const categories = ['Speaking Languages', 'Tools and Technologies', 'Industry Knowledge']
const skills = {
    languages: ['Spanish', 'English'],
    tools: [{toolType: 'Language', toolName: 'Python', expertise: 'Experienced'},
            {toolType: 'Framework', toolName: 'Django', expertise: 'Experienced'},
            {toolType: 'Language', toolName: 'Javascript', expertise: 'Advanced'},
            {toolType: 'Library', toolName: 'React', expertise: 'Beginner'},
            {toolType: 'Language', toolName: 'HTML/CSS', expertise: 'Advanced'},
            {toolType: 'Library', toolName: 'D3.js', expertise: 'Beginner'},
            ],
    industryKnowledge: ['Web Development']
}

function Skills(){
    return (
        <div className={styles.skills}>
            <div className={styles.skills__cards}></div>
            <div className={styles.skills__graph}></div>
        </div>
    )
}

export default Skills