import React, { useContext } from "react";
import { FaRegMoon } from 'react-icons/fa';
import ThemeContext  from "../context/ThemeContext";


function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="header center-items">
            <div className="navText">
                <p>Where in the world?</p>
            </div>

            <div className="themeSwitcher" onClick={toggleTheme}>
                <div>
                     <FaRegMoon />
                </div>
                <div>
                     <p>{theme === "light" ? "Dark Mode" : "Light Mode"} </p> 
                </div>
            </div>
        </div>
    )
}

export default Header;