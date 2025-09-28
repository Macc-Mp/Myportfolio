import React from 'react';
import {useState, useEffect} from 'react';

import '../css/NavBar.css';

function NavBar() {
    return (
        <div className="navbar"> {/* Use className instead of class */}
            <section className="top-nav"> {/* Use className */}
                <div className="titleleft"> {/* Use className */}
                    Paule's Portfolio
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle"> {/* Use className */}
                    <div className="menu-button"></div> {/* Use className */}
                </label>
                <ul className="menu"> {/* Use className */}
                    <li><a href="#education">Education</a></li> {/* Ensure the href matches the section ID */}
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </section>
        </div>
    );
}

export default NavBar;