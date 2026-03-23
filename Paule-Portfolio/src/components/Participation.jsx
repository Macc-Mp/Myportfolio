import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Participation.css';

function Participation() {
    const items = [
        { to: '/participation', label: 'uCaptureTheFlag', nodes: 8, color: '#00ff41' },
        { to: '/participation/part-two', label: 'Innovate', nodes: 5, color: '#ff007a' },
        { to: '/participation/part-three', label: 'Microsoft', nodes: 4, color: '#00a4ef' },
        { to: '/participation/part-four', label: 'DataCamp', nodes: 6, color: '#03ef62' },
        { to: '/participation/part-five', label: 'HackTheBox - Tinsel Trouble', nodes: 10, color: '#9fe52d' }
    ];

    const doubleItems = [...items, ...items];

    return (
        <div className="participation-center">
            <div className="participation-carousel">
                <div className="carousel-track">
                    {doubleItems.map((it, i) => (
                        <Link 
                            key={`${it.to}-${i}`} 
                            className="node-card" 
                            to={it.to}
                            style={{ '--accent': it.color }}
                        >
                            {/* The Network Visual */}
                            <div className="node-grid">
                                <div className="main-hub"></div>
                                {[...Array(it.nodes)].map((_, n) => (
                                    <div key={n} className="orbit-node"></div>
                                ))}
                                
                            </div>
                            
                            {/* Minimal Text Indicator */}
                            
                            <div className="node-info">
                                 <span className="node-status">Participations</span>
                                <h2 className="node-title">{it.label}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Participation;