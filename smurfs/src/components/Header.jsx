import React from 'react'
import {NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='links-container'>
             <NavLink to="/"> Home </NavLink>
	         <NavLink to="/add"> Add A Smurf </NavLink>
             <NavLink to ="/about">About</NavLink>
        </div>
    )
}


export default Header 
