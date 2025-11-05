import React from 'react';
import '../css/Participation.css';
function Participation() {
    return (
        <div className="participation-center">
            {/* clickable heading that opens the participation page */}
            <a className="participation-link" href="/participation.html" aria-label="Open uCTF participation page">
                <h2>Micro Trend Careers: uCTF participant</h2>
            </a>
        </div>
    );
}
export default Participation;