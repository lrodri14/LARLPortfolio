import React, { Fragment } from 'react'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import CertificationCard from '../components/UI/Card/CertificationCard'
import styles from './Certifications.module.css'

const certifications = [
    {
        institution: 'Python Institute',
        name: 'Python Programmer: Beginner',
        url: 'https://www.google.com',
        image: ''
    },
    {
        institution: 'New York University',
        name: 'Information Visualization: Programming with D3.js',
        url: 'https://www.google.com',
        image: ''
    },
    {
        institution: 'New York University1',
        name: 'Information Visualization: Programming with D3.js',
        url: 'https://www.google.com',
        image: ''
    },
        {
        institution: 'New York University2',
        name: 'Information Visualization: Programming with D3.js',
        url: 'https://www.google.com',
        image: ''
    },
        {
        institution: 'New York University3',
        name: 'Information Visualization: Programming with D3.js',
        url: 'https://www.google.com',
        image: ''
    },
        {
        institution: 'New York University4',
        name: 'Information Visualization: Programming with D3.js',
        url: 'https://www.google.com',
        image: ''
    },
]

function Certifications(){
    return (
        <Fragment>
            <Board>
                {certifications.map((cert) => {
                    return <CertificationCard key={cert.institution} institution={cert.institution} name={cert.name} url={cert.url}/>
                })}
            </Board>
            <NextButton to='/projects' activateClass='projects' className={styles['next-button']}>Projects</NextButton>
        </Fragment>
    )
}

export default Certifications