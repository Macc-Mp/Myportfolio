import React from 'react';
import {useState, useEffect} from 'react';

import '../css/NavBar.css';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 

    const toggleMenu = () =>{
      setIsMenuOpen(!isMenuOpen);
      console.log("Button works");
    };

    return (
    <div className="navbar">
          <nav className="navbar">
            <div className="logo">MY PORTFOLIO :)</div>

            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
          
      
            </ul>
         </nav>
      </div>
    );
}

export default NavBar;