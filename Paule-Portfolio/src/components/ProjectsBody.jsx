import '../css/ProjectsBody.css';
import React from 'react';
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
import placeholder from '/R.gif'; 
function ProjectsBody() {

    const projects = [
        {
            title: "Sales Predictor",
            description: "C# Web-based app for predicting sales performance using ASP.net core MVC with C# LightGBM, EPPLUS and SQL.",
            features: [
                null
            ],
            link: "https://salespredictor-gucwfabagye5fhbt.eastasia-01.azurewebsites.net/",
            repo: "https://github.com/Macc-Mp/BestSellerPredictorMVC",
            pic: "/projectsPic/predict_sale.webp",
            techs: [
                csharp,
                aspp,
                js,
                mysqll,
                hub
            ]
        },
        {
            title: "Splash: 2D shooter",
            description: "Unity 2D Retro Shooter Game for Android. Goal of the game is to reach the highest possible score as difficulty catches up.",
            features: [
                null
            ],
            link: "https://moacworks.itch.io/splash",
            pic: "/projectsPic/game.svg",
            techs: [
                unity,
                csharp,
            ]
        },
        {
            title: "My_Kiosk",
            description: "Developed with Blazor .NET8, Supabase. Allow orders and track order history",
            pic: "/projectsPic/kiosk.webp",
            techs: [
                csharp,
                csss,
                pgrest,
                hub
  
            ],
            link: "https://kioskmenu-d6hna9fjhmbga0ev.eastasia-01.azurewebsites.net/",
           
        },
        {
            title: "Web Portfolio",
            description: "Started from base HTML to React.",
            pic: "/projectsPic/web_port.webp",
            techs: [
                reactt,
                vitee,
                htmll,
                csss,
                js,
                hub
            ]
        },
        {
            title: "Movielist Selection",
            description: "API key requested from themoviedb.org/The Movie Database. This Web-based project made with React + Vite, is part of my learning curve to understand react hooks.",
            features: [
               null
            ],
            link: "https://movie-selection-show-10n16covo-moises-projects-087c620f.vercel.app/",
            repo: "https://github.com/Macc-Mp/MovieSelection-Show",
            pic: "/projectsPic/movie_select.webp",
            techs: [
                reactt,
                vitee,
                js,
                htmll,
                csss,
                hub
            ]
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
                                <div className="image-container">
                                    <img
                                        src={project.pic}
                                        className="project-image"
                                        alt={project.title + " screenshot"}
                                        width="640"
                                        height="360"
                                        loading="lazy"
                                    />
                                    {project.techs && project.techs.length > 0 && (
                                        <div className="tech-icons">
                                            {project.techs.map((tech, techIndex) => (
                                                <img key={techIndex} src={tech} alt="Tech Icon" className="tech-icon" />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="project-info-container">
                                    <div className="left-section">
                                        <div className="project-title">{project.title}</div>
                                        {project.link && (
                                            <a href={project.link} className="" target="_blank" rel="noopener noreferrer">
                                                <img className="repo-button" src="https://img.icons8.com/?size=100&id=XiFtFerWpzp4&format=png&color=000000" alt="View" />
                                            </a>
                                        )}

                                        {project.repo && (
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                <img className="repo-button" src="https://img.icons8.com/?size=100&id=IxsfsPDcvw0S&format=png&color=000000" alt="Repo" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="right-section">
                                        {project.description && (
                                            <div className="project-description">{project.description}</div>
                                        )}
                                        {/* {project.features && project.features.length > 0 && (
                                            <ul className="project-features">
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>{feature}</li>
                                                ))}
                                            </ul>
                                        )} */}
                                    </div>
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