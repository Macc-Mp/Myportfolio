import '../css/Skills.css';
import { useState } from 'react';
import magic8 from '../assets/Skills/magic8ball.png';
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
            <div>
                <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={3}
  slidesToScroll={1}
  responsive={[
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]}
>
  {skills.map(skill => (
    <div key={skill.name}>
      <img src={skill.icon} alt={skill.name} className="skill-icon" />
      <div className="skillTitle">{skill.name}</div>
    </div>
  ))}
</Slider>
            </div>
        </div>
    );
}

export default Skills;