import React from "react";
import { FaRegMoon } from 'react-icons/fa';

function Header() {
    return (
        <div className="header center-items">
            <div className="navText">
                <p>Where in the world?</p>
            </div>

            <div className="themeSwitcher">
                <div>
                     <FaRegMoon />
                </div>
                <div>
                     <p>Dark Mode</p> 
                </div>
            </div>
        </div>
    )
}

export default Header;