import '../css/ProjectsBody.css'
import {useState, useEffect} from  'react';

import React from 'react';
function ProjectsBody(){
    
    

    return(
        
        <div className='ProjectsBody'>
        <h2>Projects</h2>

            <div className ='pj1'>
                <h5>Project 1</h5>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span></span>
            </div>
            </div>

            <div className ='pj2'>
            <   h5>Project 2</h5>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span></span>
            </div>
            </div>

            <div className ='pj3'>
                <h5>Project 3</h5>
                <div className='left-card'>
                
                </div>
                <div className='right-card'>
                    <span></span>
            </div>
            </div>

            


        </div>

       
        
    );

}

export default ProjectsBody;