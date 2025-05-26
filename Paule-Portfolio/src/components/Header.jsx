import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import linkedin from '../assets/Header/linkedin.png';
import github from '../assets/Header/github.png';
import contact from '../assets/Header/contact.png';

function Header() {
    const [showFirst, setShowFirst] = useState(true);
    // State to store the visit count
    const [visitCount, setVisitCount] = useState('Loading...');

    useEffect(() => {
        // Interval for image fading effect
        const interval = setInterval(() => {
            setShowFirst(prev => !prev);
        }, 2000); // Change image every 2 seconds

        // Function to increment the visit count on the server
        const incrementVisitCount = async () => {
            try {
                // Send a POST request to your Vercel API to increment the counter
                // We don't need to await the response here as we're just triggering an increment
                await fetch('/api/increment-visit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                // console.log('Visit incremented on server.'); // For debugging
            } catch (error) {
                console.error('Error incrementing visit count:', error);
            }
        };

        // Function to fetch and display the current visit count from the server, with retry
        const fetchAndDisplayVisitCount = async (retry = 0) => {
            try {
                // Send a GET request to your Vercel API to get the current counter value
                const response = await fetch('/api/get-visits');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Update the state with the fetched count
                setVisitCount(data.count);
            } catch (error) {
                console.error('Error fetching visit count:', error);
                if (retry < 2) {
                    setTimeout(() => fetchAndDisplayVisitCount(retry + 1), 1000);
                } else {
                    setVisitCount('Error'); // Display an error message if fetching fails
                }
            }
        };

        // Call the functions when the component mounts
        incrementVisitCount(); // Increment the count when the page is visited
        fetchAndDisplayVisitCount(); // Fetch and display the updated count

        // Cleanup function for the interval
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='header'>
            <div className='text'>
                <h2>Hi, I'm Moises Paule</h2>
                {/* Display the visit counter here */}
                <p>Total Visits: <span className="visit-counter-display">{visitCount}</span></p>

                <p>
                    I aspire to be a developer someday.
                    My goal is to gain experience and currently open to any task.
                </p>

                <div className='images'>
                    <a href='#footer'>
                        <img src={contact} alt='contact' />
                    </a>
                    <a href='https://www.linkedin.com/in/moises-paule-6968ab328/'>
                        <img src={linkedin} alt='linked-in' />
                    </a>
                    <a href='https://github.com/Macc-Mp'>
                        <img src={github} alt='github' />
                    </a>
                </div>
            </div>

            <div id="light">
                <div id="lineh1"></div>
                <div id="lineh2"></div>
            </div>

            <div className='picture-container'>
                <img
                    src={showFirst ? "moises.png" : "alden.png"}
                    alt='profile'
                    className={`fade-image ${showFirst ? 'show' : 'hide'}`}
                />
            </div>
        </div>
    );
}

export default Header;
