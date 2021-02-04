import React, { useState } from "react";
import twitch from '../imgs/twitch_logo.png'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [hovered, setHovered] = useState("");
  const toggleHover = () => {
      hovered === "" ? setHovered("white-shadow") : setHovered("");
  };

  return (
    <button className={"log-button " + hovered} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => logout({ returnTo: window.location.origin })}>
        <img src={twitch} alt="Twitch Logo"/>
        Log Out
    </button>
  );
};

export default LogoutButton;