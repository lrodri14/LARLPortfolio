import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Certifications from './pages/Certifications'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import MainHeader from './components/UI/MainHeader/MainHeader'

function App() {
    return (
        <Fragment>
            <MainHeader />
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
        </Fragment >
    )
}

export default App;
