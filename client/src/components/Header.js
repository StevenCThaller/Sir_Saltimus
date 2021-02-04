import React from 'react'
import NavLink from './NavLink';
import logo from '../imgs/Sir_Saltimus_text.png'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
const Header = props => {
    const { user, isAuthenticated } = props;
    return (
        <header className="flex-row space-between">
            <img id="logo-header" className="col-sm-4" src={logo} alt="Sir Saltimus"/>
            <nav>
                {/* <div className="twitch-login">
                    
                </div> */}
                <div id="navbar" className="col-sm-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink user={ user } to="/schedule">Schedule</NavLink>
                    <NavLink to="/reviews">Reviews</NavLink>
                    <NavLink to="/forum">Forum</NavLink>
                    {/* <NavLink to="/socials">Socials</NavLink> */}
                    {
                        isAuthenticated ? 
                        <LogoutButton />
                        :
                        <LoginButton />
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header
