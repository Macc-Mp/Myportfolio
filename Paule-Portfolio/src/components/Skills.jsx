import '../css/Skills.css';
import { useState } from 'react';
import magic8 from '../assets/Skills/magic8ball.png';

import mysqll from '../assets/Skills/backend/mysql.png'; // Default import
import gitt from '../assets/Skills/tools/git.png'; // Default import
import reactt from '../assets/Skills/frontend/react.png'; // Default import
import csss from '../assets/Skills/frontend/css.png';

function Skills() {
    const skills = [
        { name: 'Frontend', images: [reactt, csss] }, // Use the imported image
        { name: 'Tools', images: [gitt] }, // Use the imported image
        { name: 'Backend', images: [mysqll] }, // Use the imported image
    ]; // List of skills with their images

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0); // Track the current skill index
    const [isShaking, setIsShaking] = useState(false);

    const handleImageClick = () => {
        setIsShaking(true); // Start the shake animation
        setTimeout(() => {
            setIsShaking(false); // Stop the shake animation after 0.5 seconds
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length); // Cycle to the next skill
        }, 500); // Match the duration of the shake animation
    };

    return (
        <div className="Skill-container">
            <img
                src={magic8}
                className={`puzzles ${isShaking ? 'shaking' : ''}`} // Add 'shaking' class if isShaking is true
                alt="magic8ball"
                onClick={handleImageClick} // Trigger shake and cycle skills on click
            />
            <div className="skills-list">
                <div className={skills[currentSkillIndex].name}>
                    <h3>{skills[currentSkillIndex].name}</h3> {/* Display the skill name */}
                    <div className="images">
                        {skills[currentSkillIndex].images.map((image, index) => (
                            <img key={index} src={image} alt={`Skill ${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;