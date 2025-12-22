import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Participation.css';

function Participation() {
    return (
        <div className="participation-center">
            <Link className="participation-link" to="/participation" aria-label="Open uCTF participation page">
                <h2>Micro Trend Careers: uCTF participant</h2>
            </Link>

            <Link className="participation-link" to="/participation/part-two" aria-label="Open event participation part two">
                <h2>Innovate and Elevate</h2>
            </Link>
         
            <Link className="participation-link" to="/participation/part-three" aria-label="Open event participation part three">
                <h2>Think Microsoft</h2>
            </Link>

            <Link className="participation-link" to="/participation/part-four" aria-label="Open event participation part four">
                <h2>DataCamp: AI and Data Literacy</h2>
            </Link> 

            <Link className="participation-link" to="/participation/part-five" aria-label="Open event participation part five">
                <h2> HackTheBox University CTF</h2>
            </Link>
        </div>
        
    );
}

export default Participation;