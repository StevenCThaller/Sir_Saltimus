import React, { useState } from 'react'
import NavLink from './NavLink';
import logo from '../imgs/Sir_Saltimus_text.png'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = props => {
    const { user, isAuthenticated } = props;
    const [responsive, setResponsive] = useState("");

    const burgerHandler = () => {
        // e.preventDefault();
        if (responsive === "") {
            setResponsive("responsive");
        } else {
            setResponsive("");
        }
    }

    const handleResponsive = () => {
        burgerHandler();
    }

    return (
        <header className="flex-row">
            <img id="logo-header" className="col-4 col-sm-4" src={logo} alt="Sir Saltimus Logo" />
            <div id="navbar" className="col-sm-8">
                <div id="topnav" className={responsive}>
                    <NavLink onClick={handleResponsive} className={"navFull"} to="/">Home</NavLink>
                    <NavLink onClick={handleResponsive} className={"navFull"} user={user} to="/schedule">Schedule</NavLink>
                    <NavLink onClick={handleResponsive} className={"navFull"} to="/reviews">Reviews</NavLink>
                    <NavLink onClick={handleResponsive} className={"navFull"} to="/forum">Forum</NavLink>
                    {/* <NavLink to="/socials">Socials</NavLink> */}
                </div>
                {
                    isAuthenticated ?
                        <LogoutButton />
                        :
                        <LoginButton />
                }
                <a className="burgerMenu" onClick={burgerHandler}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </header>
    )
}

export default Header
