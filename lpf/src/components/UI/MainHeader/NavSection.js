import React from 'react'
import { NavLink } from 'react-router-dom'

function NavSection(props){

    function clickHandler(event){
        props.onToggleNavbar()
    }

    return <NavLink to={props.to} data-class={props.dataClass} onClick={clickHandler}>{props.text}</NavLink>
}

export default NavSection