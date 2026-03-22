import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import '../css/ResumeReader.css';
import linkedin from '../assets/Header/linkedin.png';
import github from '../assets/Header/github.png';

const PDF_PATH = '/upload-resume/pauleResume.pdf';
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
            <div className="leftCard windows-bezel">
                
                {/* Windows Command Prompt Window */}
                <div className="json-container cmd-style windows-version">
                    
                    {/* Windows Title Bar */}
                    <div className="terminal-header">
                        <div className="terminal-title">
                            <span className="cmd-icon"></span> 
                            Command Prompt
                        </div>
                        <div className="windows-controls">
                            <span className="win-btn">─</span>
                            <span className="win-btn">▢</span>
                            <span className="win-btn close">✕</span>
                        </div>
                    </div>

                    {/* Windows CMD Body */}
                    <div className="json-content cmd-view">
                        <div className="cmd-line">
                            <span className="prompt">C:\Users\Moises\Portfolio&gt;</span>
                            <span className="cmd-text">dir /s</span>
                        </div>

                        <div className="file-tree">
                            <div className="tree-header"> Volume in drive C is OS_INSTALL</div>
                            <div className="tree-header"> Volume Serial Number is 2026-LAGUNA</div>
                            <br />
                            <div className="tree-header"> Directory of C:\Users\Moises\Portfolio</div>
                            <br />
                            <div className="dir-row">03/22/2026  01:30 PM    &lt;DIR&gt;          Identity</div>
                            <div className="dir-row">03/22/2026  01:32 PM    &lt;DIR&gt;          Specialization</div>
                            <div className="dir-row">03/22/2026  01:35 PM    &lt;DIR&gt;          Location</div>
                            <div className="dir-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 File(s) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 bytes</div>
                            <br />
                            <div className="tree-header"> Directory of C:\Users\Moises\Portfolio\Identity</div>
                            <div className="dir-row">03/22/2026  01:30 PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,024 moises_paule.txt</div>
                            <br />
                            <div className="tree-header"> Directory of C:\Users\Moises\Portfolio\Specialization</div>
                            <div className="dir-row">03/22/2026  01:32 PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4,096 web_dev.exe</div>
                            <div className="dir-row">03/22/2026  01:33 PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8,192 game_engine.dll</div>
                        </div>

                        {/* Active Input Line */}
                        <div className="cmd-line active-prompt">
                            <span className="prompt">C:\Users\Moises\Portfolio&gt;</span>
                            <span className="cursor">_</span>
                        </div>
                    </div>
                </div>

                {/* Windows Styled Buttons */}
                <div className='resume-container'>
                    <a className='tab2 win-action'
                        href={PDF_PATH}
                        download="paule-resume.pdf"
                    >
                        Download Resume
                    </a>
                    <a href="#contact" className="tab2 win-action">
                        Let's Connect
                    </a>
                </div>   
            </div>
        </div>
    );
}

export default Header;

