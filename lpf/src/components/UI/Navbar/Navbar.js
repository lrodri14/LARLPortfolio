import React, { Fragment, useState } from 'react'
import NavSection from './NavSection'
import styles from './Navbar.module.css'

function Navbar(){

    // Context and States
    const [displayNav, setDisplayNav] = useState(false)

    // Handlers and Event Handlers
    function clickMenuHandler(){
        setDisplayNav((prevState) => {
            return !prevState
        })
    }

    // Content Dynamic Rendering
    const sections = [
                        {text: 'Main', target: '/', dataClass:'main'},
                        {text: 'About Me', target: '/about-me', dataClass:'about-me'},
                        {text: 'Skills', target: '/skills', dataClass:'skills'},
                        {text: 'Certifications', target: '/certifications', dataClass:'certifications'},
                        {text: 'Projects', target: '/projects', dataClass:'projects'},
                        {text: 'Contact Me', target: '/contact-me', dataClass:'contact-me'},
                     ]

    let content = null

    if (displayNav){
        content =  <nav className={styles.navbar}>
                        <ul className={styles.navbar__list}>
                            {sections.map((section) => {
                                return (
                                    <NavSection
                                        key={section.target}
                                        to={section.target}
                                        text={section.text}
                                        dataClass={section.dataClass}/>)
                            })}
                        </ul>
                    </nav>
    }

    return (
        <Fragment>
            <i className={`fas fa-bars ${styles['menu-button']}`} onClick={clickMenuHandler}></i>
            {content}
        </Fragment>
    )
}

export default Navbar