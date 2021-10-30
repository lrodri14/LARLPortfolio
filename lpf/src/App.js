import React, { Fragment } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Certifications from './pages/Certifications'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Navbar from './components/UI/Navbar/Navbar'
import ProgressBar from './components/UI/ProgressBar'
import styles from './App.module.css'
import logo from './images/logo.png'

function App() {
    const location = useLocation()

    return (
        <Fragment>
            <img className={styles.logo} src={logo} alt='logo'/>
            <ProgressBar/>
            {location.pathname !== '/' && <Navbar/>}
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/about-me">
                    <AboutMe/>
                </Route>
                <Route path="/skills">
                    <Skills/>
                </Route>
                <Route path="/certifications">
                    <Certifications/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/contact-me">
                    <ContactMe/>
                </Route>
            </Switch>
        </Fragment>
    )
}

export default App;
