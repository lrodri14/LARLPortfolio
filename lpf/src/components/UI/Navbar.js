import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav>
            <ul><li><NavLink to='/'>Main</NavLink></li><li><NavLink to='/skills'>Skills</NavLink></li><li><NavLink to='/projects'>Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar