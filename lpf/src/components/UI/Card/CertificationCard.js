import React, { Fragment, useState } from  'react'
import Card from './Card'
import styles from './CertificationCard.module.css'


function CertificationCard(props){
    const [flip, setFlip] = useState(false)
    const cert = props.certification

    function certClickHandler(){
        setFlip((prevState) => {
            return !prevState
        })
    }

    function verificationClickHandler(event){
        event.stopPropagation()
    }

    return (
        <Card className={`${styles['certification-card']} ${flip && styles['certification-card--rotate']}`} onClick={certClickHandler}>
            {!flip &&
                <Fragment>
                    <img src={cert.institution_logo} alt="" className={styles['certification-card__logo']} />
                    <h2 className={styles['certification-card__title']}>{cert.name}</h2>
                    <p><i className="fas fa-university"></i> {cert.institution}</p>
                    <p><a href={`${cert.url}`} target="_blank" rel="noreferrer" onClick={verificationClickHandler}>Click here to verify certification</a></p>
                </Fragment>
            }
            {flip &&
                <img src={cert.image} alt="" className={styles['certification-card__verif-image']} />
            }
        </Card>
    )
}

export default CertificationCard