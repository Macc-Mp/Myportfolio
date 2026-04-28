import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Participation.css';

function Participation() {
    const participationRef = useRef(null);
    const cardRefs = useRef([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [personOffset, setPersonOffset] = useState(0);
    const [pointDirection, setPointDirection] = useState('center');
    const directions = ['top', 'right', 'bottom', 'left'];
    const getRandomDirection = () => directions[Math.floor(Math.random() * directions.length)];

    const updatePersonPosition = (index) => {
        const container = participationRef.current;
        const target = cardRefs.current[index];
        if (!container || !target) return;

        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const offset = targetRect.left + targetRect.width / 2 - (containerRect.left + containerRect.width / 2);
        setPersonOffset(offset);
        setPointDirection(offset > 12 ? 'right' : offset < -12 ? 'left' : 'center');
    };

    useEffect(() => {
        const handleResize = () => {
            if (hoveredCard !== null) {
                updatePersonPosition(hoveredCard);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [hoveredCard]);

    const handleCardHover = (index) => {
        setHoveredCard(index);
        updatePersonPosition(index);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
        setPersonOffset(0);
        setPointDirection('center');
    };

    const emoticonText = hoveredCard !== null ? '^0^' : '^v^';

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
            <div className="participation-carousel" ref={participationRef}>
                <div className={`participation-person ${hoveredCard !== null ? 'active' : ''}`} style={{ transform: `translateX(${personOffset}px)` }}>
                    <div className="pixel-person">
                        <div className="emoticon-text">{emoticonText}</div>
                        <div className={`person-arm ${pointDirection}`} />
                    </div>
                </div>
                <div className="carousel-track">
                    {doubleItems.map((it, i) => (
                        <Link 
                            key={`${it.to}-${i}`} 
                            className="node-card" 
                            to={it.to}
                            ref={(el) => {
                                if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
                            }}
                            style={{ '--accent': it.color }}
                            onMouseEnter={() => handleCardHover(i)}
                            onMouseLeave={handleCardLeave}
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
                                 <span className="status-indicator">Participations</span>
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