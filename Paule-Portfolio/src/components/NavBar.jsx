import React from 'react';
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar-container"> 
            <section className="modern-nav"> 
                <div className="nav-logo"> 
                    <a className="title" href="#home">Paule-Portfolio</a>
                </div>
                
                {/* Checkbox for mobile remains for logic */}
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle" aria-label="Open navigation menu"> 
                    <div className="menu-button"></div> 
                </label>

                <ul className="menu"> 
                    <li><a href="#education">./Education</a></li> 
                    <li><a href="#projects">./Projects</a></li>
                    <li><a href="#skills">./Skills</a></li>
                </ul>
            </section>
        </nav>
    );
}

export default NavBar;