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
import reactt from '../assets/Skills/frontend/react.svg';
import csss from '../assets/Skills/frontend/css.svg';
import vi from '../assets/Skills/frontend/vite.svg';

import assp from '../assets/Skills/languages/aspnet.svg';
import cpp from '../assets/Skills/languages/cpp.svg';
import csharp from '../assets/Skills/languages/csharp.svg'; 
import js from '../assets/Skills/languages/javascript.svg';

import pgrest from '../assets/Skills/backend/postgresql.svg';
import mysqll from '../assets/Skills/backend/mysql.svg';
import pman from '../assets/Skills/backend/Postman.svg';

import React from 'react';

function Skills({ compact = false }) {
    const marqueeRef = useRef(null);
    const skillRefs = useRef([]);
    const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
    const [personOffset, setPersonOffset] = useState(0);
    const [pointDirection, setPointDirection] = useState('center');

    const allSkills = [
        { img: cpp, name: 'C++' }, { img: csharp, name: 'C#' }, { img: js, name: 'JS' },
        { img: reactt, name: 'React' }, { img: csss, name: 'CSS' }, { img: vi, name: 'Vite' },
        { img: gitt, name: 'Git' }, { img: github, name: 'GitHub' }, { img: uni, name: 'Unity' },
        { img: vscode, name: 'VSCode' }, { img: mysqll, name: 'MySQL' }, 
        { img: pman, name: 'Postman' }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (hoveredSkillIndex !== null) {
                updatePersonPosition(hoveredSkillIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hoveredSkillIndex]);

    const addSkillRef = (el) => {
        if (el && !skillRefs.current.includes(el)) {
            skillRefs.current.push(el);
        }
    };

    const updatePersonPosition = (index) => {
        const container = marqueeRef.current;
        const target = skillRefs.current[index];
        if (!container || !target) return;

        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const offset = targetRect.left + targetRect.width / 2 - (containerRect.left + containerRect.width / 2);
        setPersonOffset(offset);
        setPointDirection(offset > 12 ? 'right' : offset < -12 ? 'left' : 'center');
    };

    const handleSkillHover = (index) => {
        setHoveredSkillIndex(index);
        updatePersonPosition(index);
    };

    const handleSkillLeave = () => {
        setHoveredSkillIndex(null);
        setPersonOffset(0);
        setPointDirection('center');
    };

    const emoticonText = hoveredSkillIndex !== null ? '^0^' : '^v^';

    return (
        <div className={`skills-section ${compact ? 'compact-skills' : ''}`} id="skills">
            <h1 className="skills-header">Tech Stack & Tools</h1>
            
            <div className="marquee-container" ref={marqueeRef}>
                <div className={`skills-person ${hoveredSkillIndex !== null ? 'active' : ''}`} style={{ transform: `translateX(${personOffset}px)` }}>
                    <div className="pixel-person">
                        <div className="emoticon-text">{emoticonText}</div>
                        <div className={`person-arm ${pointDirection}`} />
                    </div>
                </div>

                <div className="marquee-content" style={{ animationDelay: '0.8s' }}>
                    {[...allSkills, ...allSkills].map((skill, index) => (
                        <div
                            className="skill-card"
                            key={index}
                            ref={addSkillRef}
                            onMouseEnter={() => handleSkillHover(index)}
                            onMouseLeave={handleSkillLeave}
                        >
                            <img src={skill.img} alt={skill.name} className="skill-img" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;