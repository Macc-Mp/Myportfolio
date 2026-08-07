import React from 'react';
import Participation from './Participation';
import '../css/Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="edu-mission-container">
        <div className="edu-glitch-header">
          <h2 className="notes" data-text="ACADEMIC_PROGRESS">PROGRESS</h2>
          <div className="header-line"></div>
        </div>

        <div className="edu-split">
          {/* Left: Academic quest tree */}
          <div className="edu-left">
            <div className="quest-tree">
              {/* Mission 03: College */}
              <div className="quest-node active">
                <div className="node-marker"></div>
                <div className="quest-info">
                  <div className="quest-meta">
                    <span className="quest-id">LVL_03</span>
                    <span className="quest-status">IN_PROGRESS</span>
                  </div>
                  <h3 className="edu-title">NATIONAL UNIVERSITY LAGUNA</h3>
                  <p className="edu-degree">B.S. Computer Science</p>
                  <p className="edu-date">2023 // 2027</p>
                </div>
              </div>

              {/* Mission 02: SHS */}
              <div className="quest-node completed">
                <div className="node-marker"></div>
                <div className="quest-info">
                  <div className="quest-meta">
                    <span className="quest-id">LVL_02</span>
                    <span className="quest-status">ARCHIVED</span>
                  </div>
                  <h3 className="edu-title">SYSTEMS TECHNOLOGY INSTITUTE COLLEGE STA. CRUZ</h3>
                  <p className="edu-degree">STEM Strand</p>
                  <p className="edu-date">2020 // 2022</p>
                </div>
              </div>

              {/* Mission 01: JHS */}
              <div className="quest-node completed">
                <div className="node-marker"></div>
                <div className="quest-info">
                  <div className="quest-meta">
                    <span className="quest-id">LVL_01</span>
                    <span className="quest-status">ARCHIVED</span>
                  </div>
                  <h3 className="edu-title">PEDRO GUEVARRA MEMORIAL NATIONAL HIGH SCHOOL</h3>
                  <p className="edu-date">2016 // 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Certifications & Participations carousel */}
          <div className="edu-right">
            <Participation />
          </div>
        </div>
      </div>
    </section>
  );
}
