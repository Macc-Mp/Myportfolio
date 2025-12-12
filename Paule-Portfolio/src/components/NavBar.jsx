import React from 'react';
import {useState, useEffect} from 'react';

import '../css/NavBar.css';

function NavBar() {
    return (
        <div className="navbar"> 
            <section className="top-nav"> 
                <div className="titleleft"> 
                    <a className="title" href="#home">../Paule-Portfolio</a>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle"> 
                    <div className="menu-button"></div> 
                </label>
                <ul className="menu"> 
                    <li><a href="#education">./Education</a></li> 
                    <li><a href="#projects">./Projects</a></li>
                 
                </ul>
            </section>
        </div>
    );
}

export default NavBar;