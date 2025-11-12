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
                    <a className="card-link" href="/participation/p2/day3.jpg" target="_blank" rel="noopener noreferrer">
                      <img src="/participation/p2/day3.jpg" alt="Experience screenshot 2" />
                      <div className="caption">Day (3)</div>
                    </a>
                  </div>
       
                 <div className="card">
                   <a className="card-link" href="/participation/p2/bootcamp.png" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p2/bootcamp.png" alt="Bootcamp thumbnail" />
                     <div className="caption">Bootcamp</div>
                   </a>
                 </div>

                 <div className="card">
                  <a className="card-link" href="/participation/p2/cert.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="/participation/p2/cert.png" alt="Participation Overview Screenshot" />
                    <div className="caption">Microsoft Copilot</div>
                  </a>
                </div>
       
               </div>
             </div>
           </div>
            );
}

export default PartThree;