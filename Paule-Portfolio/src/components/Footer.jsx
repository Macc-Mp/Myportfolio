import {useState} from 'react'
import '../css/Footer.css'

function Footer() {
    // const [count, setCount] = useState(0)
    return (

        <div className="footer" id='footer'>


        {/* <button className='button' onClick={() => setCount((count) => count + 1)}>
          count is to {count}
        </button> */}

        <div className = "left-card">
            <h3>Contact</h3>
            <p>LinkedIn</p>
            <p>Github</p>
            <p>Email</p>

        </div>

      </div>
    );
}

export default Footer;