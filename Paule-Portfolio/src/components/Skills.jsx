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

import pgrest from '../assets/Skills/backend/postgresql.svg';
import mysqll from '../assets/Skills/backend/mysql.svg';

import React from 'react';
import '../css/Skills.css';

// ... (keep all your imports same as before)

function Skills() {
    // Combine all images into one flat array for the marquee
    const allSkills = [
        { img: cpp, name: 'C++' }, { img: csharp, name: 'C#' }, { img: js, name: 'JS' },
        { img: reactt, name: 'React' }, { img: csss, name: 'CSS' }, { img: vi, name: 'Vite' },
        { img: gitt, name: 'Git' }, { img: github, name: 'GitHub' }, { img: uni, name: 'Unity' },
        { img: vscode, name: 'VSCode' }, { img: figma, name: 'Figma' }, { img: mysqll, name: 'MySQL' }
    ];

    return (
        <div className="skills-section" id="skills">
            <h1 className="skills-header">Tech Stack & Tools</h1>
            
            <div className="marquee-container">
                <div className="marquee-content" style={{ animationDelay: '0.8s' }}>
                    {/* We double the array to create a seamless infinite loop */}
                    {[...allSkills, ...allSkills].map((skill, index) => (
                        <div className="skill-card" key={index}>
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