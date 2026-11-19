import React, { useEffect, useState } from 'react';
import '../css/NavBar.css';

const THEME_KEY = 'portfolio-theme';

function initialTheme() {
    try {
        return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
    } catch {
        return 'dark';
    }
}

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
        </svg>
    );
}

function NavBar() {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            window.localStorage.setItem(THEME_KEY, theme);
        } catch {
            return;
        }
    }, [theme]);

    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

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
                </ul>

                <button
                    type="button"
                    className="theme-toggle"
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    aria-label={label}
                    title={label}
                    aria-pressed={!isDark}
                >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
            </section>
        </nav>
    );
}

export default NavBar;