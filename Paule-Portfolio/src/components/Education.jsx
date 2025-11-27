import '../css/Education.css';
import React from 'react';
function Education(){

    return( 

        <section id="education"> {/* Ensure the ID matches the href in NavBar */}
    <div className="education">
        <div className="eduCard">
              <h2 className="notes">Education</h2>
            <div className="outer">

                <div className="left-col">
                    <h3 className="edu-title">College</h3>
                    <p className="edu-degree">Bachelor of Science in Computer Science</p>
                    <p className="edu-date">2023 - Current</p>
                    <p className="edu-school">National University Laguna</p>

                    <h3 className="edu-title">Senior High</h3>
                    <p className="edu-degree">Science, Technology Engineering and Mathematics</p>
                    <p className="edu-date">2020 - 2022</p>
                    <p className="edu-school">STI College Sta. Cruz</p>

                    <h3 className="edu-title">Junior High</h3>
                      <p className="edu-date">2016 - 2020</p>
                    <p className="edu-school">Pedro Guevarra Memorial National High School</p>
                </div>
{/* 
                <div className="right-col">          
                </div> }
*/}

            </div>

        <h2 className="notes">Hobby</h2>
        <p className="hobby">Hobby : Sprite and Indie Game Contributor at Itch.io @MoacWorks - itch.io</p>

        </div>
    </div>
</section> 
    );
}

export default Education;