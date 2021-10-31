import React from 'react'
import NavSection from './NavSection'
import styles from './Navbar.module.css'

function Navbar(props){

    // Event Handlers
    function closeNavbarHandler(){
        props.onToggleNavbar()
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

    return (
         <nav className={styles.navbar}>
           <i className={`fas fa fa-times ${styles.navbar__close}`} onClick={closeNavbarHandler}></i>
            <ul className={styles.navbar__content}>
                {sections.map((section) => {
                    return (
                        <li key={section.target} className={styles.navbar__section}>
                            <NavSection to={section.target} text={section.text} dataClass={section.dataClass} onToggleNavbar={props.onToggleNavbar}/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar