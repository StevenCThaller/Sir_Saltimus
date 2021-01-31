import React, { useState, useEffect } from 'react'
import NavLink from './NavLink';
import logo from '../imgs/Sir_Saltimus_text.png'

const Header = () => {
    return (
        <header className="row">
            <img id="logo-header" className="col-sm-4" src={logo} alt="Sir Saltimus"/>
            <nav id="navbar" className="col-sm-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/schedule">Schedule</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/forum">Forum</NavLink>
                <NavLink to="/socials">Socials</NavLink>
            </nav>
        </header>
    )
}

export default Header
