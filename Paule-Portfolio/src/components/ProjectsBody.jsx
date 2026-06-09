import '../css/ProjectsBody.css';
import React, { useState } from 'react';

// Import your assets
import csharp from '../assets/Skills/languages/csharp.svg';
import js from '../assets/Skills/languages/javascript.svg';    
import aspp from '../assets/Skills/languages/aspnet.svg';
import pgrest from '../assets/Skills/backend/postgresql.svg';
import mysqll from '../assets/Skills/backend/mysql.svg';
import hub from '../assets/Skills/tools/hub.svg';  
import unity from '../assets/Skills/tools/unity.svg';
import vitee from '../assets/Skills/frontend/vite.svg';
import reactt from '../assets/Skills/frontend/react.svg';
import htmll from '../assets/Skills/frontend/httml.svg';
import csss from '../assets/Skills/frontend/css.svg';

import tss from '../assets/Skills/languages/typescript.svg';
import mngdb from '../assets/Skills/backend/mongodb.svg';
import tw from '../assets/Skills/frontend/tailwind-css.svg';

function ProjectsBody() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [peekDirection, setPeekDirection] = useState('top');
    const directions = ['top', 'bottom'];
    const getRandomDirection = () => directions[Math.floor(Math.random() * directions.length)];

    const projects = [
        {
            title: "SignNU",
            description: "Approval and Signatory System - Email Notifications, Role-based Access, Chat System, 2FA",
            link: "signnu.work",
            pic: "/projectsPic/signnu.svg",
            techs: [ js, tss, mngdb, hub, tw],
            demo_gif: "/projectsPic/signnu.gif",
            glow: '255, 99, 132'
        },
        {
            title: "Sales Predictor",
            description: "C# Web-based app for predicting sales performance using ASP.net core MVC with C# LightGBM, EPPLUS and SQL.",
            link: "https://salespredictor-gucwfabagye5fhbt.eastasia-01.azurewebsites.net/",
            repo: "https://github.com/Macc-Mp/BestSellerPredictorMVC",
            pic: "/projectsPic/predict_sale.webp",
            techs: [csharp, aspp, js, mysqll, hub],
            demo_gif: "/projectsPic/predict_sale.gif",
            glow: '0, 212, 255'
        },
        {
            title: "Splash: 2D shooter",
            description: "Unity 2D Retro Shooter Game for Android. Goal of the game is to reach the highest possible score as difficulty catches up.",
            link: "https://moacworks.itch.io/splash",
            pic: "/projectsPic/game.svg",
            techs: [unity, csharp],
            demo_gif: "/projectsPic/game.gif",
            glow: '255, 99, 132'
        },
        {
            title: "My_Kiosk",
            description: "Developed with Blazor .NET8, Supabase. Allow orders and track order history",
            pic: "/projectsPic/kiosk.png",
            techs: [csharp, csss, pgrest, hub],
            link: "https://kiosk-show.azurewebsites.net//",
            demo_gif: "/projectsPic/kiosk.gif",
            glow: '118, 255, 101'
        },
        {
            title: "Web Portfolio",
            description: "Started from base HTML to React.",
            pic: "/projectsPic/web_port.webp",
            techs: [reactt, vitee, htmll, csss, js, hub],
            glow: '255, 184, 49'
        },
        {
            title: "Movielist Selection",
            description: "API key requested from themoviedb.org/The Movie Database. This Web-based project made with React + Vite, is part of my learning curve to understand react hooks.",
            link: "https://movie-selection-show-aqp6.vercel.app/",
            repo: "https://github.com/Macc-Mp/MovieSelection-Show",
            pic: "/projectsPic/movie_select.png",
            techs: [reactt, vitee, js, htmll, csss, hub],
            demo_gif: "/projectsPic/movie_select.gif",
            glow: '146, 100, 255'
        },
    ];

    return (
        <section id="projects">
            <div className="projects">
                <h2 className='notes'>Projects</h2>
                <div id="projectCards">
                    {projects.map((project, index) => (
                        <div
                            className={`project-card${activeIndex === index ? ' expanded' : ''}`}
                            key={index}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            onMouseEnter={() => {
                                setHoveredCard(index);
                                setPeekDirection(getRandomDirection());
                            }}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{ '--glow': project.glow }}
                        >
                            <div className={`project-peek-wrapper ${peekDirection} ${hoveredCard === index ? 'visible' : ''}`}>
                                <div className="project-peek-emoticon">^0^</div>
                            </div>
                            <div className="box-content">
                                {/* IMAGE SECTION */}
                                <div className="image-container">
                                    <img
                                        src={hoveredCard === index && project.demo_gif ? project.demo_gif : project.pic}
                                        className="project-image"
                                        alt={project.title}
                                    />
                                </div>

                                {/* STATIC TECH STACK ROW (Matches image_fde310.png) */}
                                {project.techs && (
                                    <div className="tech-stack-row">
                                        {project.techs.map((tech, i) => (
                                            <img key={i} src={tech} alt="stack" className="tech-icon-static" />
                                        ))}
                                    </div>
                                )}

                                {/* HOVER INFO SECTION */}
                                <div className="project-info-container">
                                    <div className="project-card-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        <div className="project-links">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-action-link"
                                                    aria-label={`Open ${project.title} live demo`}
                                                    title={`Open ${project.title} live demo`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {/* Visual icon (decorative for screen readers) */}
                                                    <div className="external-link-icon" aria-hidden="true"></div>
                                                    {/* Accessible link text for screen readers */}
                                                    <span className="sr-only">Open {project.title} live demo</span>
                                                </a>
                                            )}
                                            {project.repo && (
                                                <a
                                                    href={project.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${project.title} source code`}
                                                    title={`View ${project.title} source code`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <img
                                                        className="action-icon"
                                                        src="/github.svg"
                                                        alt={`Repository for ${project.title}`}
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsBody;