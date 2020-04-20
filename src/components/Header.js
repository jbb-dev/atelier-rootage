import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {
    return (
    <ul className='Header'>
        <li><NavLink activeClassName='active' exact to ='/' >Home</NavLink></li>
        <li><NavLink activeClassName='active' to ='/html'>HTML</NavLink></li>
        <li><NavLink activeClassName='active' to ='/css'>CSS</NavLink></li>
        <li><NavLink activeClassName='active' to ='/js'>JS</NavLink></li>
    </ul>
    )}


export default Header