import React from 'react'
import { Link } from '@reach/router';


const NavLink = props => {
    return (
        <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: {
                    color: isCurrent ? window.innerWidth <= 600 ? "#59c0f9" : "black" : "white",
                    textShadow: isCurrent ? window.innerWidth <= 600 ? "1px 1px 2px black" : "1px 1px 2px white" : "1px 1px 2px black"
                }
            };
        }}
    />
    )
}

export default NavLink
