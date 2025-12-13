import { useEffect } from 'react'
import '../css/Footer.css'
import linkedin from '../assets/Header/linkedin.png'
import github from '../assets/Header/github.png'
import email from '../assets/Header/contact.png'

function Footer() {
    // useEffect(() => {
    //     // Dynamically add LinkedIn badge script if not already present
    //     if (!document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')) {
    //         const script = document.createElement('script');
    //         script.src = "https://platform.linkedin.com/badges/js/profile.js";
    //         script.async = true;
    //         script.defer = true;
    //         script.type = "text/javascript";
    //         document.body.appendChild(script);
    //     }
    // }, []);

    return (
        <section id="contact">
    <div className="contact">
        <h2>Contact Me</h2>
        
        <div className="contact-container">
            <div className="contact-left">
                 <img src="/me.svg" className="editMe" alt="picture of me"></img>
                 <a className="aLink" href="https://www.linkedin.com/in/moises-paule-6968ab328" target="_blank">My linkedin</a>
            </div>

            <div className="contactLinks">
                <div className="media-link">
                    <img src="/fb.svg" alt="Facebook" />
                    <p><a className="aLink" href="https://www.facebook.com/moises.paule.39" target="_blank" rel="noopener noreferrer">Paule, Moises</a></p>
                </div>
                <div className="media-link">
                    <img src="/github.svg" alt="Github"></img>
                    <p><a className="aLink" href="https://github.com/Macc-Mp" target="_blank">Macc-Mp (MacMoises)</a></p>
                </div>
                <div className="media-link">
                    <img src="/email.svg" alt="Email"></img>
                    <p><a className="aLink" href="mailto:macmoises12@gmail.com" target="_blank">macmoises12@gmail.com</a></p>
                </div>
               <div className="media-link">
                        <a href="#home" className="footer-tab2">
                            Return to Top
                        </a>
               </div>
            </div>  
        </div>
    </div>
</section>

    );
}

export default Footer;