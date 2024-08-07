import React, { Fragment, useEffect } from 'react'
import useHttp from '../hooks/useHttp'
import LoadingText from '../components/UI/LoadingText/LoadingText'
import Board from '../components/UI/Board/Board'
import NextButton from '../components/UI/NextButton/NextButton'
import CertificationCard from '../components/UI/Card/CertificationCard'
import styles from './Certifications.module.css'

function Certifications(){

    const {isLoading, error, data, sendRequest} = useHttp()

    useEffect(() => {
        sendRequest({url: 'certifications/'})
    }, [])

    return (
        <Fragment>
            {!isLoading && !error &&
                <Fragment>
                    <Board>
                        {data && data.map((cert) => {
                            return <CertificationCard key={cert.id} certification={cert}/>
                        })}
                    </Board>
                    <NextButton to='/projects' activateClass='projects' className={styles['next-button']}>Projects</NextButton>
                </Fragment>
            }
            {isLoading && <LoadingText category={'Certifications'}/>}
        </Fragment>
    )
}

export default Certifications