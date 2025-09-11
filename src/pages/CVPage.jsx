import React from 'react';
import '../styles/CVPage.css';

const CVPage = () => {
  return (
    <div className="cv-page">
      <div className="cv-content">
        <div className="cv-header">
          <h1 className="cv-title">Ioan Herbil</h1>
          <p className="cv-subtitle">Cluj-Napoca, Romania | +40 753 913 709 | ionutherbil@gmail.com</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/herbil-ioan-302307231/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://github.com/IonutzHerbil" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>

        <section className="cv-section">
          <h2>Summary</h2>
          <p>
            Computer Engineering student with 5+ years of software development experience spanning web applications,
            embedded systems, and data analysis. Competitive programmer with proven expertise in C++, Python, Vue.js,
            React, and .NET. Experienced building scalable platforms and complex systems for diverse industries.
          </p>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <ul className="cv-list">
            <li>Technical University of Cluj-Napoca | B.S. in Computer Engineering | Oct 2023 - Jul 2027</li>
            <li>University of Limerick (Exchange) | Computer Engineering | Sep 2025 - Jan 2026</li>
          </ul>
          <p><strong>Relevant Academic Achievements:</strong> University Performance Scholarship (GPA 3.5/4); 10/10 at the Mathematics baccalaureate; Regional Informatics Olympiad; Cloudflight Coding Contest rank 8</p>
        </section>

        <section className="cv-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">Programming languages: C/C++, Java, JavaScript, Python, VB6, VHDL</div>
            <div className="skill-item">Web technologies: Vue.js, Angular, React, Node.js, Django, .NET, TypeScript, Canvas API</div>
            <div className="skill-item">Miscellaneous: Git, SQL, InfluxDB, Docker, AWS, Keycloak</div>
            <div className="skill-item">Hardware: Arduino, PCB design, Sensors & Actuators</div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>
          <ul className="cv-list">
            <li>
              <strong>Junior Full Stack Developer | Yonder</strong> | Mar 2025 - Sept 2025
              <ul className="cv-sublist">
                <li>Built a mock .NET + Angular app as part of an intern team; transitioned to a Vue-based real project serving 11 hospitals</li>
                <li>Hired as a junior engineer; developed an Autoinstaller for an application, and an OSB API</li>
                <li><em>Technologies:</em> .NET, Angular, Vue.js, SQL, VB6</li>
              </ul>
            </li>
            <li>
              <strong>Full Stack Intern | AirGradient</strong> | Jul 2025 - Aug 2025
              <ul className="cv-sublist">
                <li>Created Vue 3 composables for geolocation and toast notifications with Vuetify</li>
                <li>Engineered high-performance meteorological visualizations of 10,000+ data points using NOAA GRIB2 data, bilinear interpolation, optimized canvas rendering, and real-time particle animation</li>
                <li><em>Technologies:</em> Vue.js, TypeScript, Canvas API, Node.js, GRIB2</li>
              </ul>
            </li>
            <li>
              <strong>Full Stack Volunteer Developer | Trizan</strong> | Dec 2024 - Mar 2025
              <ul className="cv-sublist">
                <li>Engineered a free website-builder platform with optimized database design, secure JWT authentication, user authorization management, and scalable backend architecture</li>
                <li><em>Technologies:</em> Node.js, JWT, Postgres</li>
              </ul>
            </li>
            <li>
              <strong>Full Stack Engineer Apprentice | Accenture</strong> | Mar 2022 - Nov 2022
              <ul className="cv-sublist">
                <li>Collaborated with a 5-member student team to develop a microcontroller-based barrier system for forest access control, implementing automated flow monitoring and anti-smuggling detection</li>
                <li><em>Technologies:</em> Python, React, Django, Web Scraping, Arduino, C++, Hardware</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Projects & Additional Experience</h2>
          <ul className="cv-list">
            <li>Low Voltage & Software Engineer Volunteer | ART-TU Formula Student | Oct 2024 - Jul 2025 - Built a telemetry system, processing data for 20+ sensors and points of interest; contributed to PCB/hardware design.</li>
            <li>Engineered Smart Home Security and Ultrasonic Radar Systems using Arduino and Processing, with real-time object detection, angle scanning, and distance measurement.</li>
            <li>Originality prize - Polihack 48h hackathon 2024. Built an award-winning "Moodlit" smart bed system in a 3-person team, integrating Arduino sensors, ChatGPT, and Azure TTS for personalized children's storytelling.</li>
            <li>Built Interactive Games Hub using React and Spring Boot: Tic Tac Toe, Minesweeper, Memory Matrix with A* pathfinding and matrix algorithms.</li>
            <li>Algorithmic trading - Developed strategies using QuantConnect, AlgoTrader, and Interactive Brokers APIs for automated market analysis and trading.</li>
            <li>BEST course in Technology - Mechanism Design and Control at Suleyman Demirel University, Isparta, Turkey.</li>
            <li>Infineon Winter School 2024 - Quantum Computing.</li>
            <li>CS50's Introduction to Artificial Intelligence with Python by Harvard.</li>
            <li>Private Tutor - Taught programming fundamentals and problem-solving to students | 2023-present.</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Languages</h2>
          <div className="skills-grid">
            <div className="skill-item">English - C1, Cambridge Assessment English (CAE)</div>
            <div className="skill-item">Romanian - Native</div>
            <div className="skill-item">Ukrainian - B2</div>
            <div className="skill-item">French - A2</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPage;