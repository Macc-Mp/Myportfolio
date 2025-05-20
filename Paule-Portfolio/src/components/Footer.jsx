import {useState} from 'react'
import '../css/Footer.css'
import linkedin from '../assets/Header/linkedin.png'
import github from '../assets/Header/github.png'
import email from '../assets/Header/contact.png'

function Footer() {
    // const [count, setCount] = useState(0)
    return (

        <div className="footer" id='footer'>
            <div className="footer-content">
                <h3>Contact</h3>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/moises-paule-6968ab328/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="footer-icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Macc-Mp" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="footer-icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="mailto:your.email@example.com">
                        <img src={email} alt="Email" className="footer-icon" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;