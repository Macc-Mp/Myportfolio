import React from 'react';
import '../css/Header.css';

const PDF_PATH = '/upload-resume/pauleResume.pdf';

function Header() {
    return (
        <div className="intro">
            {/* The Game Controller Shape */}
            <div className="leftCard">
                
                {/* Background Video that follows the clip-path handles */}
                <div className="animate">
                    <video 
                        className="video-bg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="/your-video-path.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* The "Screen" of the Controller */}
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
                    <a 
                        className="tab2" 
                        href={PDF_PATH} 
                        download="paule-resume.pdf"
                    >
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