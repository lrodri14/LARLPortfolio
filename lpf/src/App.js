import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Navbar from './components/UI/Navbar'
import styles from './App.module.css'

function App() {
    return (
        <Fragment>
            <img className={styles.logo} src='/logo.png' alt='Luis Adolfo\'s Portfolio Logo/>
            <Navbar/>
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
                <Route path="/projects">
                    <Projects/>
                </Route>
            </Switch>
        </Fragment>
    )
}

export default App;
