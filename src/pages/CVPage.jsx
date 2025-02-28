// src/pages/CVPage.jsx
import React, { useEffect } from 'react';
import '../styles/CVPage.css';

const CVPage = () => {
  useEffect(() => {
    // Set animation delays for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
    });
  }, []);

  return (
    <div className="cv-page">
      <div className="cv-content">
        <div className="cv-header">
          <h1 className="cv-title">Ioan Herbil</h1>
          <p className="cv-subtitle">Software Engineer & Computer Science Student</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/herbil-ioan-302307231/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn Profile
            </a>
            <a href="https://github.com/IonutzHerbil" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub Repositories
            </a>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Education</h2>
              <ul>
                <li>Technical University of Cluj-Napoca, Faculty of Computer Engineering, second year (2023-present)</li>
                <li>National College "Emil Racovita", Cluj-Napoca (2019-2023)</li>
                <li>Secondary school "Ioan Bob", Cluj-Napoca (2011-2019)</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Experience</h2>
              <p>
                Part of the software engineering team working on the telemetry project, importing data from wireless sensors into an InfluxDB database.
              </p>
              <p>
                Developed a barrier system for controlling wood flow by scanning truck volumes and comparing data from web scraping.
              </p>
              <ul>
                <li><strong>ART-TU Formula Student</strong> (Oct 2024 - present)<br />
                Low Voltage and Software Engineer</li>
                
                <li><strong>Trizan</strong> (Dec 2024 - Present)<br />
                Software Engineer Intern<br />
                Developing a website builder web application in a team of 8 people</li>
                
                <li><strong>Accenture</strong> (Mar 2022 - Nov 2022)<br />
                Full Stack Engineer Apprenticeship</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Projects and Achievements</h2>
              <ul>
                <li>Originality prize at the Polihack 48h hackathon (2024)</li>
                <li>First place Nationally/16th globally in the Dataart Proggy-Buggy coding contest</li>
                <li>Infineon Winter School 2024 – Quantum Computing</li>
                <li>AI Image recognition system – personal project using JavaScript</li>
                <li>Weather app – personal project using JavaScript</li>
                <li>Hand calculator – personal project using JavaScript</li>
                <li>CodeRun 2023 (5th place) - Django, JavaScript</li>
                <li>IIOT (International Informatics Olympiad in Teams) 2022 - C++, Algorithms, Problem Solving</li>
                <li>Romanian Computer Science Olympiad, Regional phase</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Languages</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  Romanian
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "100%"}}></span></span>
                </div>
                <div className="skill-item">
                  English
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "95%"}}></span></span>
                </div>
                <div className="skill-item">
                  Ukrainian
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "80%"}}></span></span>
                </div>
                <div className="skill-item">
                  French
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "70%"}}></span></span>
                </div>
                <div className="skill-item">
                  German
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "60%"}}></span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  C/C++
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "95%"}}></span></span>
                </div>
                <div className="skill-item">
                  Python
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "90%"}}></span></span>
                </div>
                <div className="skill-item">
                  JavaScript
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "85%"}}></span></span>
                </div>
                <div className="skill-item">
                  HTML/CSS
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "85%"}}></span></span>
                </div>
                <div className="skill-item">
                  React
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "80%"}}></span></span>
                </div>
                <div className="skill-item">
                  Java
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "75%"}}></span></span>
                </div>
                <div className="skill-item">
                  Data Structures
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "90%"}}></span></span>
                </div>
                <div className="skill-item">
                  Algorithms
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "90%"}}></span></span>
                </div>
                <div className="skill-item">
                  VHDL
                  <span className="skill-level"><span className="skill-level-fill" style={{width: "70%"}}></span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Courses and Certifications</h2>
              <ul>
                <li>CS50's Introduction to Artificial Intelligence with Python by Harvard</li>
                <li>BEST course in Technology: Mechanism Design and Control at Suleyman Demirel University, Isparta, Turkey</li>
                <li>Full Stack Open (fullstackopen.com from Helsinki University)</li>
                <li>Code with Mosh - Python (Completed)</li>
                <li>Machine Learning with JS (Completed)</li>
                <li>DPIT Summer School 2022 (Completed)</li>
                <li>Certificate in Database design and programming in SQL (High school programme)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;