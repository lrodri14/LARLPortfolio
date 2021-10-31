import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from '../ProgressBar/ProgressBar'
import Navbar from '../Navbar/Navbar'
import logo from '../../../images/logo.png'
import styles from './MainHeader.module.css'

function MainHeader(){

    // States
    const [displayNav, setDisplayNav] = useState(false)
    const [viewedInMobile, setViewedInMobile] = useState(false)

    // Side Effects
    useEffect(() => {
        if (window.innerWidth <= 768){
            setViewedInMobile(true)
        }
    }, [])

    // Handlers
    function toggleNavbarHandler(){
        setDisplayNav((prevState) => {
            return !prevState
        })
    }

    return (
        <div className={styles['main-header']}>
            <div className={styles['main-header__container']}>
                <img src={logo} alt='LARLPortfolio logo' className={styles['main-header__container__logo']}/>
            </div>
            <div className={styles['main-header__container']}>
                {!displayNav && <ProgressBar />}
                {!viewedInMobile && displayNav && <Navbar onToggleNavbar={toggleNavbarHandler}/>}
                {viewedInMobile && displayNav && ReactDOM.createPortal(<Navbar onToggleNavbar={toggleNavbarHandler}/>, document.querySelector('#mobile-nav'))}
            </div>
            <div className={styles['main-header__container']}>
                <i className={`fas fa-bars ${styles['main-header__container__menu-button']}`} onClick={toggleNavbarHandler}></i>
            </div>
        </div>
    )
}

export default MainHeader