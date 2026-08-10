import React from 'react';
import '../css/Header.css';
import Skills from './Skills';
import ImageVortex from './ImageVortex';

const PDF_PATH = '/upload-resume/pauleResume.pdf';

function Header() {
    return (
        <div className="intro">

            {/* Background Layer (outer div, full viewport) */}
            <div className="intro-bg">
                <ImageVortex />
            </div>

            <div className="leftCard">
                

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

                <Skills compact />
            </div>
        </div>
    );
}

export default Header;