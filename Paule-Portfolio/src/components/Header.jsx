import React, { useRef } from 'react';
import '../css/Header.css';

const PDF_PATH = '/upload-resume/pauleResume.pdf';

function Header() {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        
        // Calculate the center of the card
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate mouse distance from center (-1 to 1 scale)
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        // Update CSS variables for only the joystick offset (controller body stays static)
        card.style.setProperty('--joyX', `${x * 15}px`); // Joystick horizontal slide
        card.style.setProperty('--joyY', `${y * 15}px`); // Joystick vertical slide
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;

        // Reset joystick position smoothly when mouse leaves
        card.style.setProperty('--joyX', '0px');
        card.style.setProperty('--joyY', '0px');
    };

    return (
        <div className="intro" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Added ref and dynamic transform style */}
            <div 
                className="leftCard" 
                ref={cardRef}
            >
                {/* Background Video */}
                <div className="animate">
                    <video className="video-bg" autoPlay loop muted playsInline>
                        <source src="/your-video-path.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* The "Screen" */}
                <div className="json-container">
                    <div className="json-data">
                        <span className="json-bracket">{'{'}</span>
                        <div style={{ paddingLeft: '20px' }}>
                            <div>
                                <span className="json-key">"name"</span>: 
                                <span className="json-string"> "Moises Paule"</span>,
                            </div>
                            <div>
                                <span className="json-key">"role"</span>: 
                                <span className="json-string"> "Fullstack Developer"</span>,
                            </div>
                            <div>
                                <span className="json-key">"specialization"</span>: 
                                <span className="json-string"> "Game & Web Dev"</span>
                            </div>
                        </div>
                        <span className="json-bracket">{'}'}</span>
                    </div>
                </div>

                {/* Bottom Center Buttons */}
                <div className="resume-container">
                    <a className="tab2" href={PDF_PATH} download="paule-resume.pdf">
                        Download Resume
                    </a>
                    <a href="#contact" className="tab2">
                        Let's Connect
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;