import React from 'react';
import { Link } from 'react-router-dom'
import "../css/sub-components/participation.css";
export default function PartFour() {
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
                   <a className="card-link" href="/participation/p3/AIF0028990717278.pdf" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p1/teams.jpg" alt="Certificate thumbnail" />
                     <div className="caption">Certificate</div>
                   </a>
                 </div>
       
                 <div className="card">
                   <a className="card-link" href="/participation/p3/DL0033281569784.pdf" target="_blank" rel="noopener noreferrer">
                     <img src="/participation/p1/pos.jpg" alt="Participation Overview Screenshot" />
                     <div className="caption">Placement</div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
    );
}
