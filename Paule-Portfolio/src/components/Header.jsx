import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import linkedin from '../assets/Header/linkedin.png';
import github from '../assets/Header/github.png';
import contact from '../assets/Header/contact.png';

function Header() {
    // const [showFirst, setShowFirst] = useState(true);
    // // State to store the visit count
    // const [visitCount, setVisitCount] = useState('Loading...');
    // const [createdAt, setCreatedAt] = useState('');

    // useEffect(() => {
    //     // Interval for image fading effect
    //     const interval = setInterval(() => {
    //         setShowFirst(prev => !prev);
    //     }, 2000); // Change image every 2 seconds

    //     // Function to increment the visit count on the server
    //     const incrementVisitCount = async () => {
    //         try {
    //             // Send a POST request to your Vercel API to increment the counter
    //             // We don't need to await the response here as we're just triggering an increment
    //             await fetch('/api/increment-visit', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             // console.log('Visit incremented on server.'); // For debugging
    //         } catch (error) {
    //             console.error('Error incrementing visit count:', error);
    //         }
    //     };

    //     // Function to fetch and display the current visit count from the server, with retry
    //     const fetchAndDisplayVisitCount = async (retry = 0) => {
    //         try {
    //             const response = await fetch('/api/get-visits');
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setVisitCount(data.count);
    //             setCreatedAt(data.lastVisit || 'N/A');
    //         } catch (error) {
    //             console.error('Error fetching visit count:', error);
    //             if (retry < 2) {
    //                 setTimeout(() => fetchAndDisplayVisitCount(retry + 1), 1000);
    //             } else {
    //                 setVisitCount('Error'); // Display an error message if fetching fails
    //             }
    //         }
    //     };

    //     // Call the functions when the component mounts
    //     incrementVisitCount(); // Increment the count when the page is visited
    //     fetchAndDisplayVisitCount(); // Fetch and display the updated count

    //     // Cleanup function for the interval
    //     return () => clearInterval(interval);
    // }, []); // Empty dependency array means this effect runs once on mount

    // // Format createdAt for display
    // let formattedCreatedAt = 'N/A';
    // if (createdAt && createdAt !== 'N/A') {
    //     try {
    //         formattedCreatedAt = new Date(createdAt).toLocaleString();
    //     } catch {
    //         formattedCreatedAt = createdAt;
    //     }
    // }

    return (
        <div className="intro">
             
             <div className="leftCard">
                 <h1>Hi, I'm Moises Paule</h1>
                 <p>I aspire to be a developer someday. My goal is to gain experience and currently open to any task.</p>
                    
                {/* Display the visit counter here */}
                {/* <p>Page Loads: <span className="visit-counter-display">{visitCount}</span></p> */}
                {/* <p>Time Stamp: <span className="visit-counter-display">{formattedCreatedAt}</span></p> */}
                <a href="https://www.linkedin.com/in/moises-paule-6968ab328" target="_blank" rel="noopener noreferrer">
                    <img src="/button.svg" alt="contact-me" className="cctcme" />
                </a>
            </div>
            <div className="rightCard">
               <div className="video-wrapper" aria-hidden="true">
                    <video
                        className="video-bg"
                        src="/header-bg/waving.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
         </div>
       


                
 
    );
}

export default Header;

