import '../css/Skills.css';
import { useState, useEffect, useRef } from 'react';
import magic8 from '/v1flame.gif';
import magic7 from'/v2flame.gif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import skill images
import gitt from '../assets/Skills/tools/git.svg';
import github from '../assets/Skills/tools/hub.svg';
import uni from '../assets/Skills/tools/unity.svg';
import vscode from '../assets/Skills/tools/vscode.svg';
import vsstud from '../assets/Skills/tools/vsstud.svg';
import figma from '../assets/Skills/tools/figma.svg';
import reactt from '../assets/Skills/frontend/react.svg';
import csss from '../assets/Skills/frontend/css.svg';
import vi from '../assets/Skills/frontend/vite.svg';

import assp from '../assets/Skills/languages/aspnet.svg';
import cpp from '../assets/Skills/languages/cpp.svg';
import csharp from '../assets/Skills/languages/csharp.svg'; 
import js from '../assets/Skills/languages/javascript.svg';
import mysqll from '../assets/Skills/backend/mysql.svg';

function Skills() {
    const skills = [
        { name: 'Languages', images: [cpp, csharp, js] },
        { name: 'Frontend/Framework', images: [reactt, csss, vi, assp] },
        { name: 'Tools', images: [gitt, github, uni, vscode, vsstud, figma] },
        { name: 'Backend', images: [mysqll] },
    ];

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [hovered, setHovered] = useState(false);
    // Auto-cycle timer ref
    const intervalRef = useRef(null);

    const handleImageClick = () => {
        setIsShaking(true); // Add the 'shaking' class
        setTimeout(() => {
            setIsShaking(false); // Remove the 'shaking' class after 0.5 seconds
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length); // Cycle to the next skill
        }, 500); // Match the duration of the shake animation
    };

    // start an infinite auto-cycle every 5 seconds, cleanup on unmount
    useEffect(() => {
        const ms = 5000;
        intervalRef.current = setInterval(() => {
            handleImageClick();
        }, ms);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="Skill-container">
            {/* <img
                src={hovered ? magic7 : magic8}
                className={`puzzles ${isShaking ? 'shaking' : ''}`}
                alt="magic8ball"
                onClick={handleImageClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            /> */}
            {/* Auto-cycle runs in background every 5s; manual clicks still work. */}
            <div className="skills-list">
                <div className="skillTitle">
                    <h1>{skills[currentSkillIndex].name}</h1>
                    <div className="images">
                        {skills[currentSkillIndex].images.map((image, index) => (
                            <img key={index} src={image} alt={`Skill ${index}`} className="skill-icon" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;