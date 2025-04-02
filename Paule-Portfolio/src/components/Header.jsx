import '../css/Header.css'
import linkedin from '../assets/Header/linkedin.png'
import github from '../assets/Header/github.png'
import contact from '../assets/Header/contact.png'

function Header() {
    return(
        <div className='header'>
            
           
            <div className='text'>
            <h2>Hi, I'm Moises Paule</h2>
            
            <p> I aspire to be a developer someday.
                 My goal is to gain experience and currently open to any task.
            </p>

            <div className='images'>
            <img src= {contact} alt='linked-in' />
            <a href='https://www.linkedin.com/in/moises-paule-6968ab328/'>    
            <img src= {linkedin} alt='linked-in' />
            </a>
            <a href ='https://github.com/Macc-Mp'>
                <img src= {github} alt='linked-in'  />
            </a>
            </div>

           

            </div>

            <div id="light">
            <div id="lineh1"></div>
            <div id="lineh2"></div>
         
            </div>

        </div>
        
    );
}


export default Header
