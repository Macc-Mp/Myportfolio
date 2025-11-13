import react from 'react';
import { Link } from 'react-router-dom'
import "../css/sub-components/participation.css";

function PartThree() 
{
    return (
      <div className="participation-page">
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>School of Computer Studies: Innovate and Elevate</h1>
                   <p className="subtitle">Certificates to prove my participation.</p>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                   <a className="card-link" href="/participation/p3/career.pdf" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                     <div className="caption">Day (1) 11/06/2025</div>
                   </a>
                 </div>
       
                  <div className="card">
                    <a className="card-link" href="/participation/p3/academic.pdf" target="_blank" rel="noopener noreferrer">
                      <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                      <div className="caption">Day (2) 11/08/2025</div>
                    </a>
                  </div>
       
               </div>
             </div>
           </div>
            );
}

export default PartThree;