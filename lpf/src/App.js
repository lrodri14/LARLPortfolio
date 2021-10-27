import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './pages/Main'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Main/>
            </Route>
            <Route path="/skills">
                <Skills/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
        </Switch>
    )
}

export default App;
