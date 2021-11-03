import React, { Fragment, useState } from  'react'
import Card from './Card'
import sealenaLogo from '../../../images/nyu-logo.png'
import certificate from '../../../images/certificate.png'
import styles from './CertificationCard.module.css'


function CertificationCard(props){
    const [flip, setFlip] = useState(false)

    function certClickHandler(){
        setFlip((prevState) => {
            return !prevState
        })
    }

    return (
        <Card className={`${styles['certification-card']} ${flip && styles['certification-card--rotate']}`} onClick={certClickHandler}>
            {!flip &&
                <Fragment>
                    <img src={sealenaLogo} alt="" className={styles['certification-card__logo']} />
                    <h2 className={styles['certification-card__title']}>{props.name}</h2>
                    <p><i className="fas fa-university"></i> {props.institution}</p>
                    <p>Verify At: <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a></p>
                </Fragment>
            }
            {flip &&
                <img src={certificate} alt="" className={styles['certification-card__verif-image']} />
            }
        </Card>
    )
}

export default CertificationCard