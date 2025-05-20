import '../css/ProjectsBody.css'
import {useState, useEffect} from  'react';

import React from 'react';
function ProjectsBody(){

    return(
        
        <div className='ProjectsBody'>
        <h2>Projects</h2>

            <div className ='pj1'>
                <h3>ASP.net Website</h3>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span>
                        <p>C# Web-based app for simple database implementation using the ASP.net MVC</p>
                    </span>
            </div>
            </div>

            <div className ='pj2'>
            <h3>Splash: A 2D Shooter</h3>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span>
                    <p>Unity 2D Retro Shooter Game for Android. Goal of the game is to reach the highest possible score as difficulty catches up. </p>
                    <p>Game Features: </p>
                    <ul>
                        <li>Basic Blend Tree Animations</li>
                        <li>GUI Player Controls</li>
                        <li>C# Dictionary for Game Escalation</li>
                        <li>Save local Highscore</li>
                        <li>Rigidbody Collisions</li>
                        <li>Point and Lives System</li>
                        <li>Replayability</li>
                       
                    </ul>
                    </span>
            </div>
            </div>

            <div className ='pj3'>
                <h3>Movielist Selection</h3>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span>
                    <p>API key requested from themoviedb.org/The Movie Database. This Web-based project made with React + Vite, is part of my learning curve
                        to understand react hooks.
                    </p>
                    <p>Project Features: </p>
                    <ul>
                        <li>Browse movies via pagination feature</li>
                        <li>Favorited movies are only stored locally</li>
                        <li>Search bar</li>
                        <li>Screen Responsive </li>
                        <li>Responsive Design</li>
                    </ul>
                    </span>
            </div>
            </div>

            


        </div>

       
        
    );

}

export default ProjectsBody;