import React from 'react';
import { Link } from 'react-router-dom'
import "../css/sub-components/participation.css";
function PartOne() {
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
            <a className="card-link" href="/participation/p1/score1.png" target="_blank" rel="noopener noreferrer">
              <img src="/participation/p1/score1.png" alt="Experience screenshot 1" />
              <div className="caption">Practice Sessions (1)</div>
            </a>
          </div>

          <div className="card">
            <a className="card-link" href="/participation/p1/score2.png" target="_blank" rel="noopener noreferrer">
              <img src="/participation/p1/score2.png" alt="Experience screenshot 2" />
              <div className="caption">Practice Sessions (2)</div>
            </a>
          </div>

          <div className="card">
            <a className="card-link" href="/participation/p1/uctf_cert.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/participation/p1/teams.jpg" alt="Certificate thumbnail" />
              <div className="caption">Certificate</div>
            </a>
          </div>

          <div className="card">
            <a className="card-link" href="/participation/p1/pos.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/participation/p1/pos.jpg" alt="Participation Overview Screenshot" />
              <div className="caption">Placement</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartTwo() 
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

function PartFour() {
    return (
        <div className="participation-page">
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>DataCamp: AI and Data Literacy</h1>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                   <a className="card-link" href="/participation/p4/AIF0028990717278.pdf" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p4/ai.png" alt="Certificate thumbnail" />
                     <div className="caption">Ai Fundamentals</div>
                   </a>
                 </div>
       
                 <div className="card">
                   <a className="card-link" href="/participation/p4/DL0033281569784.pdf" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p4/data.png" alt="Participation Overview Screenshot" />
                     <div className="caption">Data Literacy</div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
    );
}

export { PartOne, PartTwo, PartThree, PartFour };