import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Participation.css';

function Participation() {
    const certifications = [
        { to: '/participation/part-three', label: 'Microsoft', nodes: 4, color: '#00a4ef', type: 'Certification' },
        { to: '/participation/part-four', label: 'DataCamp', nodes: 6, color: '#03ef62', type: 'Certification' },
    ];

    const participations = [
        { to: '/participation', label: 'uCaptureTheFlag', nodes: 8, color: '#00ff41', type: 'Participation' },
        { to: '/participation/part-two', label: 'Innovate', nodes: 5, color: '#ff007a', type: 'Participation' },
        { to: '/participation/part-five', label: 'HackTheBox - Tinsel Trouble', nodes: 10, color: '#9fe52d', type: 'Participation' },
    ];

    const renderTrack = (items) => {
        const loop = [...items, ...items];
        return loop.map((it, i) => (
            <Link
                key={`${it.to}-${i}`}
                className="node-card"
                to={it.to}
                style={{ '--accent': it.color }}
            >
                <div className="node-grid">
                    <div className="main-hub"></div>
                    {[...Array(it.nodes)].map((_, n) => (
                        <div key={n} className="orbit-node"></div>
                    ))}
                </div>
                <div className="node-info">
                    <span className="status-indicator">{it.type}</span>
                    <h2 className="node-title">{it.label}</h2>
                </div>
            </Link>
        ));
    };

    return (
        <div className="participation-center">
            <div className="participation-carousel">
                <div className="carousel-track-label">CERTIFICATIONS</div>
                <div className="carousel-track">{renderTrack(certifications)}</div>

                <div className="carousel-track-label">PARTICIPATIONS</div>
                <div className="carousel-track">{renderTrack(participations)}</div>
            </div>
        </div>
    );
}

export default Participation;
