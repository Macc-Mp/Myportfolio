import react from 'react';
import { Link } from 'react-router-dom'
import "../css/sub-components/participation.css";

function PartTwo() 
{
    return (
        <div className="participation-page">
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>uCTF — Participation & Experience</h1>
                   <p className="subtitle">Projects, screenshots and notes from my uCTF participation.</p>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                   <a className="card-link" href="/participation/p2/day1.jpg" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                     <div className="caption">Day (1)</div>
                   </a>
                 </div>
       
                 <div className="card">
                   <a className="card-link" href="/participation/p2/day2.jpg" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                     <div className="caption">Day (2)</div>
                   </a>
                 </div>
       
                 <div className="card">
                   <a className="card-link" href="/participation/p2/bootcamp.png" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p2/bootcamp.png" alt="Bootcamp thumbnail" />
                     <div className="caption">Bootcamp</div>
                   </a>
                 </div>
       
               </div>
             </div>
           </div>
            );
}

export default PartTwo;