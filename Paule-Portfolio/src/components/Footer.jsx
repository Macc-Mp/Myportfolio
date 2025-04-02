import {useState} from 'react'
import '../css/Footer.css'

function Footer() {
    const [count, setCount] = useState(0)
    return (

        <div className="footer">
        <button className='button' onClick={() => setCount((count) => count + 1)}>
          count is to {count}
        </button>

      </div>
    );
}

export default Footer;