import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Participation.css';

function Participation() {
    const items = [
        { to: '/participation', title: 'MicroTrendCareers: uCTF', aria: 'Open uCTF participation page' },
        { to: '/participation/part-two', title: 'Innovate and Elevate', aria: 'Open event participation part two' },
        { to: '/participation/part-three', title: 'Think Microsoft', aria: 'Open event participation part three' },
        { to: '/participation/part-four', title: 'DataCamp: AI/Data Lit.', aria: 'Open event participation part four' },
        { to: '/participation/part-five', title: 'HackTheBox uCTF', aria: 'Open event participation part five' }
    ];

    // render the items twice for seamless infinite scroll
    const doubleItems = [...items, ...items];

    return (
        <div className="participation-center">
            <div className="participation-carousel" aria-hidden="false">
                <div className="carousel-track" tabIndex={0}>
                    {doubleItems.map((it, i) => (
                        <Link key={`${it.to}-${i}`} className="participation-link" to={it.to} aria-label={it.aria}>
                            <h2>{it.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Participation;