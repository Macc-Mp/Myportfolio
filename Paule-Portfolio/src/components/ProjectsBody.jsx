import '../css/ProjectsBody.css';
import React from 'react';
import csharp from '../assets/Skills/languages/csharp.svg';
import js from '../assets/Skills/languages/javascript.svg';    
import aspp from '../assets/Skills/languages/aspnet.svg';
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
            features: [
                "Predict Under-performing, Normal and Best Seller sales of an item based on evaluated spreadsheet data.",
                "Using gradient boosting decision trees."
            ],
            link: "https://moacworks.itch.io/splash",
            pic: "/projectsPic/1.svg",
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
                "Basic Blend Tree Animations",
                "GUI Player Controls",
                "Rule based Escalation",
                "Save local Highscore",
                "Rigidbody Collisions",
                "Point, Powerup and Lives System",
                "Replayability"
            ],
            link: "https://moacworks.itch.io/splash",
            pic: "/projectsPic/2.svg",
            techs: [
                unity,
                csharp,
            ]
        },
        {
            title: "Movielist Selection",
            description: "API key requested from themoviedb.org/The Movie Database. This Web-based project made with React + Vite, is part of my learning curve to understand react hooks.",
            features: [
                "Browse movies via pagination feature",
                "Favorite movies stored locally",
                "Search bar",
                "Screen Responsive",
                "Responsive Design",
                "View movie details"
            ],
            link: "https://movie-selection-rosy.vercel.app/",
            pic: "/projectsPic/3.svg",
            techs: [
                reactt,
                vitee,
                js,
                htmll,
                csss,
                hub
            ]
        },
        {
            title: "Project 4",
            description: "Description for Project 4.",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3"
            ],
            link: "https://project4-link.com",
            pic: null,
            techs: [
                hub
            ]
        },
        {
            title: "Project 5",
            description: "Description for Project 5.",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3"
            ],
            link: "https://project5-link.com",
            pic: null,
            techs: [
                hub
            ]
        },
        {
            title: "Project 6",
            description: "Description for Project 6.",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3"
            ],
            link: "https://project6-link.com",
            pic: null,
            techs: [
                hub
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="projects">
                <h2>Projects</h2>
                <div className="projects-header">Featured projects to showcase my knowledge on C++, C# and JavaScript.</div>
                <div id="projectCards">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="box-content">
                                <div className="image-container">
                                    <img src={project.pic} className="project-image" />
                                    <div className="tech-icons">
                                        {project.techs.map((tech, techIndex) => (
                                            <img key={techIndex} src={tech} alt="Tech Icon" className="tech-icon" />
                                        ))}
                                    </div>
                                </div>
                                <div className="project-info-container">
                                    <div className="left-section">
                                        <div className="project-title">{project.title}</div>
                                        <a href={project.link} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
                                    </div>
                                    <div className="right-section">
                                        <div className="project-description">{project.description}</div>
                                        <ul className="project-features">
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
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