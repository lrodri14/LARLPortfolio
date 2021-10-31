import React, { useContext } from 'react'
import ProgressContext from '../../../store/progress_context'
import { NavLink } from 'react-router-dom'

function NavSection(props){
    const ctx = useContext(ProgressContext)

    function clickHandler(event){
            const activeSection = {
            'text': event.target.textContent,
            'class': event.target.getAttribute('data-class')
        }
        ctx.activateSection(activeSection)
        props.onToggleNavbar()
    }

    return <NavLink to={props.to} data-class={props.dataClass} onClick={clickHandler}>{props.text}</NavLink>
}

export default NavSection