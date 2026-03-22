import '../css/ProjectsBody.css';
import React from 'react';

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

function ProjectsBody() {
    const projects = [
        {
            title: "Sales Predictor",
            description: "C# Web-based app for predicting sales performance using ASP.net core MVC with C# LightGBM, EPPLUS and SQL.",
            link: "https://salespredictor-gucwfabagye5fhbt.eastasia-01.azurewebsites.net/",
            repo: "https://github.com/Macc-Mp/BestSellerPredictorMVC",
            pic: "/projectsPic/predict_sale.webp",
            techs: [csharp, aspp, js, mysqll, hub]
        },
        {
            title: "Splash: 2D shooter",
            description: "Unity 2D Retro Shooter Game for Android. Goal of the game is to reach the highest possible score as difficulty catches up.",
            link: "https://moacworks.itch.io/splash",
            pic: "/projectsPic/game.svg",
            techs: [unity, csharp]
        },
        {
            title: "My_Kiosk",
            description: "Developed with Blazor .NET8, Supabase. Allow orders and track order history",
            pic: "/projectsPic/kiosk.webp",
            techs: [csharp, csss, pgrest, hub],
            link: "https://kioskmenu-d6hna9fjhmbga0ev.eastasia-01.azurewebsites.net/",
        },
        {
            title: "Web Portfolio",
            description: "Started from base HTML to React.",
            pic: "/projectsPic/web_port.webp",
            techs: [reactt, vitee, htmll, csss, js, hub]
        },
        {
            title: "Movielist Selection",
            description: "API key requested from themoviedb.org/The Movie Database. This Web-based project made with React + Vite, is part of my learning curve to understand react hooks.",
            link: "https://movie-selection-show-10n16covo-moises-projects-087c620f.vercel.app/",
            repo: "https://github.com/Macc-Mp/MovieSelection-Show",
            pic: "/projectsPic/movie_select.webp",
            techs: [reactt, vitee, js, htmll, csss, hub]
        },
    ];

    return (
        <section id="projects">
            <div className="projects">
                <h2>Projects</h2>
                <div id="projectCards">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="box-content">
                                {/* IMAGE SECTION */}
                                <div className="image-container">
                                    <img src={project.pic} className="project-image" alt={project.title} />
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
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-action-link">
                                                        {/* Replace the img with this div */}
                                                        <div className="external-link-icon"></div>
                                                    </a>
                                                )}
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                    <img className="action-icon" src="/github.svg" alt="repo" />
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