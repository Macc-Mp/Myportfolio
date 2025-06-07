import { useEffect } from 'react'
import '../css/Footer.css'
import linkedin from '../assets/Header/linkedin.png'
import github from '../assets/Header/github.png'
import email from '../assets/Header/contact.png'

function Footer() {
    useEffect(() => {
        // Dynamically add LinkedIn badge script if not already present
        if (!document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')) {
            const script = document.createElement('script');
            script.src = "https://platform.linkedin.com/badges/js/profile.js";
            script.async = true;
            script.defer = true;
            script.type = "text/javascript";
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-flex">
                    <div className="badge-base LI-profile-badge"
                        data-locale="en_US"
                        data-size="medium"
                        data-theme="dark"
                        data-type="HORIZONTAL"
                        data-vanity="moises-paule-6968ab328"
                        data-version="v1">
                    </div>
                    <div className="footer-divider"></div>
                    <div>
                        <h3>Contact</h3>
                        <div className="footer-links">
                         
                            <a href="https://github.com/Macc-Mp" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className="footer-icon" />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:macmoises12@gmail.com">
                                <img src={email} alt="Email" className="footer-icon" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;