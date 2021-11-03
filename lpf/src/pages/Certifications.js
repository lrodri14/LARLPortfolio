import React from 'react'
import Board from '../components/UI/Board/Board'
import CertificationCard from '../components/UI/Card/CertificationCard'

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
        <Board>
            {certifications.map((cert) => {
                return <CertificationCard key={cert.institution} institution={cert.institution} name={cert.name} url={cert.url}/>
            })}
        </Board>
    )
}

export default Certifications