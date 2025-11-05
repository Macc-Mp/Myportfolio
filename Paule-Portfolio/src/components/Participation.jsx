import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Participation.css';

function Participation() {
    return (
        <div className="participation-center">
            {/* clickable heading that opens the participation route */}
            <Link className="participation-link" to="/participation" aria-label="Open uCTF participation page">
                <h2>Micro Trend Careers: uCTF participant</h2>
            </Link>

            <Link className="participation-link" to="/participation/part-two" aria-label="Open event participation part two">
                <h2>Event Participation</h2>
            </Link>
         
        </div>
        
    );
}

export default Participation;