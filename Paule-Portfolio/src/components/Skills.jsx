import '../css/Skills.css';
import { useState } from 'react';
import magic8 from '../assets/Skills/magic8ball.png';

// Import skill images
import mysqll from '../assets/Skills/backend/mysql.png';
import gitt from '../assets/Skills/tools/git.png';
import github from '../assets/Skills/tools/github.png';
import uni from '../assets/Skills/tools/unity.png';
import vscode from '../assets/Skills/tools/vscode.png';
import vsstud from '../assets/Skills/tools/vsstud.png';
import figma from '../assets/Skills/tools/figma.png';
import reactt from '../assets/Skills/frontend/react.png';
import csss from '../assets/Skills/frontend/css.png';
import vi from '../assets/Skills/frontend/vite.svg';
import httml from '../assets/Skills/frontend/httml.png';
import assp from '../assets/Skills/frontend/assp.png';
import cpp from '../assets/Skills/languages/cpp.png';
import csharp from '../assets/Skills/languages/csharp.png';
import jss from '../assets/Skills/languages/jss.png';

function Skills() {
    const skills = [
        { name: 'Languages', images: [cpp, csharp, jss] },
        { name: 'Frontend/Framework', images: [reactt, csss, vi, httml, assp] },
        { name: 'Tools', images: [gitt, github, uni, vscode, vsstud, figma] },
        { name: 'Backend', images: [mysqll] },
    ];

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false);

    const handleImageClick = () => {
        setIsShaking(true); // Add the 'shaking' class
        setTimeout(() => {
            setIsShaking(false); // Remove the 'shaking' class after 0.5 seconds
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length); // Cycle to the next skill
        }, 500); // Match the duration of the shake animation
    };

    return (
        <div className="Skill-container">
            <img
                src={magic8}
                className={`puzzles ${isShaking ? 'shaking' : ''}`} // Dynamically add 'shaking' class
                alt="magic8ball"
                onClick={handleImageClick}
            />
            <div className="skills-list">
                <div className="skillTitle">
                    <h3>{skills[currentSkillIndex].name}</h3>
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