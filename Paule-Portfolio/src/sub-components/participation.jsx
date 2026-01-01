import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "../css/sub-components/participation.css";
function PartOne() {
  return (
    <div className="participation-page">

      <HoverCenterManager />

      <div className="container">
        <div className="top">
          <div>
            <h1>uCTF — Participation & Experience</h1>
            <p className="subtitle">Projects, screenshots and notes from my uCTF participation.</p>
          </div>
            <div className="controls">
            <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
          </div>
        </div>

        <div className="gallery">
          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/score1.png" alt="Experience screenshot 1" />
              <div className="signature-overlay"></div>
              <div className="caption">Practice Sessions (1)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/score2.png" alt="Experience screenshot 2" />
              <div className="signature-overlay"></div>
              <div className="caption">Practice Sessions (2)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/teams.jpg" alt="Certificate thumbnail" />
              <div className="signature-overlay"></div>
              <div className="caption">Certificate</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p1/pos.jpg" alt="Participation Overview Screenshot" />
              <div className="signature-overlay"></div>
              <div className="caption">Placement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartTwo() 
{
    return (
        <div className="participation-page">
      <HoverCenterManager />
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>School of Computer Studies: Innovate and Elevate</h1>
                   <p className="subtitle">Certificates to prove my participation.</p>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                   <div className="card-link">
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                     <div className="signature-overlay"></div>
                     <div className="caption">Day (1)</div>
                   </div>
                 </div>
       
                  <div className="card">
                    <div className="card-link">
                      <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                      <div className="signature-overlay"></div>
                      <div className="caption">Day (2)</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-link">
                      <img src="/participation/p2/day3.jpg" alt="Experience screenshot 2" />
                      <div className="signature-overlay"></div>
                      <div className="caption">Day (3)</div>
                    </div>
                  </div>
       
                 <div className="card">
                   <div className="card-link">
                     <img src="/participation/p2/bootcamp.png" alt="Bootcamp thumbnail" />
                     <div className="signature-overlay"></div>
                     <div className="caption">Bootcamp</div>
                   </div>
                 </div>

                 <div className="card">
                  <div className="card-link">
                    <img src="/participation/p2/cert.png" alt="Participation Overview Screenshot" />
                    <div className="signature-overlay"></div>
                    <div className="caption">Microsoft Copilot</div>
                  </div>
                </div>
       
               </div>
             </div>
           </div>
            );
}

function PartThree() 
{
    return (
      <div className="participation-page">
  <HoverCenterManager />
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>School of Computer Studies: Innovate and Elevate</h1>
                   <p className="subtitle">Certificates to prove my participation.</p>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                  
                     <img src="/participation/p2/day1.jpg" alt="Experience screenshot 1" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Day (1) 11/06/2025</div>
                 
                 </div>
       
                  <div className="card">
                   
                      <img src="/participation/p2/day2.jpg" alt="Experience screenshot 2" />
                    <div className="signature-overlay"></div>
                      <div className="caption">Day (2) 11/08/2025</div>
                  
                  </div>
       
               </div>
             </div>
           </div>
            );
}

function PartFour() {
    return (
        <div className="participation-page">
      <HoverCenterManager />
       
             <div className="container">
               <div className="top">
                 <div>
                   <h1>DataCamp: AI and Data Literacy</h1>
                 </div>
                   <div className="controls">
                   <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
                 </div>
               </div>
       
               <div className="gallery">
                 <div className="card">
                 
                     <img src="/participation/p4/ai.png" alt="Certificate thumbnail" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Ai Fundamentals</div>
                  
                 </div>
       
                 <div className="card">
                 
                     <img src="/participation/p4/data.png" alt="Participation Overview Screenshot" />
                    <div className="signature-overlay"></div>
                     <div className="caption">Data Literacy</div>
                 
                 </div>
               </div>
             </div>
           </div>
    );
}


function PartFive() {
    return (
    <div className="participation-page">
  <HoverCenterManager />

      <div className="container">
        <div className="top">
          <div>
            <h1>HTB: University CTF: Tinsel Trouble Participation</h1>
            <p className="subtitle">Projects, screenshots and notes from my CTF participation.</p>
          </div>
            <div className="controls">
            <Link className="part-back" to="/" aria-label="Back to site">Back to site</Link>
          </div>
        </div>

        <div className="gallery">
          <div className="card">
            <div className="card-link">
              <img src="/participation/p5/1.png" alt="Experience screenshot 1" />
              <div className="signature-overlay"></div>
              <div className="caption">Contribution(1)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p5/2.png" alt="Experience screenshot 2" />
              <div className="signature-overlay"></div>
              <div className="caption">Contribution(2)</div>
            </div>
          </div>

           <div className="card">
            <div className="card-link">
              <img src="/participation/p5/3.png" alt="Experience screenshot 3" />
              <div className="signature-overlay"></div>
              <div className="caption">Contribution(3)</div>
            </div>
          </div>

          <div className="card">
            <div className="card-link">
              <img src="/participation/p5/image.png" alt="Certificate thumbnail" />
              <div className="signature-overlay"></div>
              <div className="caption">Certificate</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export { PartOne, PartTwo, PartThree, PartFour, PartFive };

function HoverCenterManager() {
  useEffect(() => {
    // Create overlay container with close button
    const overlay = document.createElement('div');
    overlay.id = 'pc-overlay';
    overlay.innerHTML = '<div class="backdrop"></div><div class="clone"><button class="pc-close" aria-label="Close">×</button><img src="" alt=""/><div class="caption"></div></div>';
    document.body.appendChild(overlay);

    const cloneImg = overlay.querySelector('img');
    const cloneCap = overlay.querySelector('.caption');
    const closeBtn = overlay.querySelector('.pc-close');
    let visible = false;
    let persistent = false;
    let activeCard = null;

    function showFor(card, opts = {}) {
      const img = card.querySelector('img');
      const cap = card.querySelector('.caption');
      if (!img) return;
      activeCard = card;
      cloneImg.src = img.src;
      cloneImg.alt = img.alt || '';
      cloneCap.textContent = cap ? cap.textContent : '';
      if (opts.persist) {
        persistent = true;
        overlay.classList.add('persistent');
      } else {
        overlay.classList.remove('persistent');
      }
      overlay.classList.add('visible');
      visible = true;
    }

    function hide() {
      if (persistent) return; // don't hide while persistent
      if (!visible) return;
      overlay.classList.remove('visible');
      overlay.classList.remove('persistent');
      visible = false;
      persistent = false;
      activeCard = null;
    }

    function close() {
      overlay.classList.remove('visible');
      overlay.classList.remove('persistent');
      visible = false;
      persistent = false;
      activeCard = null;
    }

    // Hover behavior removed — overlay opens only on click.

    function onDocClick(e) {
      const clickedCard = e.target && e.target.closest && e.target.closest('.card');
      // If user clicked a card, open persistent overlay for that card
      if (clickedCard) {
        showFor(clickedCard, { persist: true });
        return;
      }
      // Click outside card: if backdrop or close button clicked, close overlay
      if (e.target.closest && e.target.closest('#pc-overlay .backdrop')) { close(); }
      if (e.target.classList && e.target.classList.contains('pc-close')) { close(); }
    }

    function onKey(e) { if (e.key === 'Escape') close(); }

    // Use named scroll handler so it can be removed correctly
    function onScroll() { if (!persistent) hide(); }

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, true);

    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll, true);
      overlay.remove();
    };
  }, []);
  return null;
}
