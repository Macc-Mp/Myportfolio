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

export default PartOne;