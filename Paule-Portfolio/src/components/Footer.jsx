import { useEffect } from 'react'
import '../css/Footer.css'

function Footer() {
    return (
        <section id="contact">
            <div className="contact">
                {/* HUD Header with sub-text */}
                <div className="hud-header">
                    <span className="status-indicator">● ONLINE</span>
                    <h2>INITIATE_COLLABORATION</h2>
                    <p className="subtitle">COLLABORATE_WITH_ME</p>
                </div>
                
                <div className="contact-container">
                    {/* Left: Player ID Card */}
                    <div className="contact-left">
                        <div className="image-scanner">
                            <div className="scan-bar"></div>
                            <img src="/me.svg" className="editMe" alt="picture of me" />
                        </div>
                        <div className="id-tag">
                            <span className="label">UID:</span>
                            <a className="aLink profile-link" href="https://www.linkedin.com/in/moises-paule-6968ab328" target="_blank" rel="noreferrer">
                                My LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right: Comms Channels */}
                    <div className="contactLinks">
                        <div className="channel-label">COMM_CHANNELS</div>
                        
                        <div className="media-link">
                            <div className="bracket-icon">
                                <img src="/fb.svg" alt="Facebook" />
                            </div>
                            <a className="aLink" href="https://www.facebook.com/moises.paule.39" target="_blank" rel="noopener noreferrer">
                                <span className="link-text">Paule, Moises</span>
                            </a>
                        </div>

                        <div className="media-link">
                            <div className="bracket-icon">
                                <img src="/github.svg" alt="Github" />
                            </div>
                            <a className="aLink" href="https://github.com/Macc-Mp" target="_blank" rel="noreferrer">
                                <span className="link-text">Macc-Mp</span>
                            </a>
                        </div>

                        <div className="media-link">
                            <div className="bracket-icon">
                                <img src="/email.svg" alt="Email" />
                            </div>
                            <a className="aLink" href="mailto:macmoises12@gmail.com">
                                <span className="link-text">macmoises12@gmail.com</span>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    );
}

export default Footer;