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

        // Update CSS variables for the joystick offset
        // We multiply by 15 for a subtle 15px travel distance
        card.style.setProperty('--joyX', `${x * 15}px`); 
        card.style.setProperty('--joyY', `${y * 15}px`); 
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
            
            <div className="leftCard" ref={cardRef}>
                
                {/* 1. Background Video Layer */}
                <div className="animate">
                    <video className="video-bg" autoPlay loop muted playsInline>
                        <source src="/your-video-path.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* 2. Game Title Card (The "Screen") */}
                <div className="game-title-card">
                    <div className="scanner-line"></div>
                    
                    <div className="card-header">
                        <span className="player-tag">P1 // ACTIVE</span>
                        <div className="level-badge">LV. 67</div>
                    </div>

                    <h1 className="hero-name">MOISES PAULE</h1>

                    <div className="class-selection">
                        {/* <div className="class-item active">
                            <span className="dot"></span> FULLSTACK_DEV
                        </div>
                        <div className="class-item">
                            <span className="dot"></span> GAME_DESIGNER
                        </div> */}
                    </div>

                    <div className="stats-container">
                        <div className="stat-row">
                            <span>HP</span> 
                            <div className="bar"><div className="fill" style={{width: '90%'}}></div></div>
                        </div>

                    </div>

                    <div className="press-start">
                        <span className="blink">▶</span> Aspiring Software Dev., Interested in Game Design and Web Development. <span className="blink">◀</span>
                    </div>
                </div>

                {/* 3. Action Buttons (The Menu) */}
                <div className="resume-container">
                    <a className="tab2" href={PDF_PATH} download="paule-resume.pdf">
                        DOWNLOAD RESUME
                    </a>
                    <a href="#contact" className="tab2">
                        LET'S CONNECT
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Header;