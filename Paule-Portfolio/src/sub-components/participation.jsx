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
            <div className="card-link">
              <img src="/participation/p1/score1.png" alt="Experience screenshot 1" />
              <div className="signature-overlay"></div>
              <div className="caption">Practice Sessions (1)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/score2.png" alt="Experience screenshot 2" />
              <div className="signature-overlay"></div>
              <div className="caption">Practice Sessions (2)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/teams.jpg" alt="Certificate thumbnail" />
              <div className="signature-overlay"></div>
              <div className="caption">Certificate</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/pos.jpg" alt="Participation Overview Screenshot" />
              <div className="signature-overlay"></div>
              <div className="caption">Placement</div>
            </div>
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
                   <div className="card-link">
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                     <div className="signature-overlay"></div>
                     <div className="caption">Day (1)</div>
                   </div>
                 </div>
       
                  <div className="card">
                    <div className="card-link">
                      <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                      <div className="signature-overlay"></div>
                      <div className="caption">Day (2)</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-link">
                      <img src="/participation/p2/day3.jpg" alt="Experience screenshot 2" />
                      <div className="signature-overlay"></div>
                      <div className="caption">Day (3)</div>
                    </div>
                  </div>
       
                 <div className="card">
                   <div className="card-link">
                     <img src="/participation/p2/bootcamp.png" alt="Bootcamp thumbnail" />
                     <div className="signature-overlay"></div>
                     <div className="caption">Bootcamp</div>
                   </div>
                 </div>

                 <div className="card">
                  <div className="card-link">
                    <img src="/participation/p2/cert.png" alt="Participation Overview Screenshot" />
                    <div className="signature-overlay"></div>
                    <div className="caption">Microsoft Copilot</div>
                  </div>
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
                  
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Day (1) 11/06/2025</div>
                 
                 </div>
       
                  <div className="card">
                   
                      <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                    <div className="signature-overlay"></div>
                      <div className="caption">Day (2) 11/08/2025</div>
                  
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
                 
                     <img src="/participation/p4/ai.png" alt="Certificate thumbnail" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Ai Fundamentals</div>
                  
                 </div>
       
                 <div className="card">
                 
                     <img src="/participation/p4/data.png" alt="Participation Overview Screenshot" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Data Literacy</div>
                 
                 </div>
               </div>
             </div>
           </div>
    );
}

export { PartOne, PartTwo, PartThree, PartFour };