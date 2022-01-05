import React, { Fragment, useEffect } from 'react'
import useHttp from '../hooks/useHttp'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import CertificationCard from '../components/UI/Card/CertificationCard'
import styles from './Certifications.module.css'

function Certifications(){

    const {response, sendRequest} = useHttp()

    useEffect(() => {
        sendRequest({endPoint: 'certifications/'})
    }, [sendRequest])

    return (
        <Fragment>
            <Board>
                {response && response.map((cert) => {
                    return <CertificationCard key={cert.id} certification={cert}/>
                })}
            </Board>
            <NextButton to='/projects' activateClass='projects' className={styles['next-button']}>Projects</NextButton>
        </Fragment>
    )
}

export default Certifications