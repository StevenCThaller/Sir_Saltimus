import React, { useState } from 'react'
import twitch from '../imgs/twitch_logo.png'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const [hovered, setHovered] = useState("");
    const toggleHover = () => {
        hovered === "" ? setHovered("white-shadow") : setHovered("");
    };
    return (
    <button className={"log-button " + hovered} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => loginWithRedirect()}>
            <img src={twitch} alt="Twitch Logo"/>
            Log In
        </button>
    )
}

export default LoginButton
