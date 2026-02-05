import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    [heroRef, aboutRef, skillsRef, experienceRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-badge">
            <span>Professional Developer</span>
          </div>
          <h1 className="hero-title">
            Ioan Herbil
          </h1>
          <p className="hero-subtitle">
            Computer Engineering student crafting human-centered software and performant systems.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/cv" className="cta-secondary">
              <span>View CV</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section" ref={aboutRef}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about technology and continuous learning
            </p>
          </div>
          <div className="about-content">
            <p>
              I'm a Computer Engineering student with 5+ years of software development experience. 
              I specialize in web applications, embedded systems, and data analysis, with expertise 
              in C++, Python, Vue.js, React, and .NET.
            </p>
            <p>
              Currently studying at Technical University of Cluj-Napoca and doing an exchange at 
              University of Limerick. I've worked with companies like Yonder, and 
              Accenture, building scalable platforms and complex systems.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section" ref={skillsRef}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <span>F</span>
              </div>
              <h3 className="skill-title">Frontend Development</h3>
              <p className="skill-description">
                React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <span>B</span>
              </div>
              <h3 className="skill-title">Backend Development</h3>
              <p className="skill-description">
                Node.js, Python, C++, .NET, REST APIs, GraphQL, Databases
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <span>T</span>
              </div>
              <h3 className="skill-title">Tools & Technologies</h3>
              <p className="skill-description">
                Git, Docker, VS Code, Figma, Postman, Vite, Webpack
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section" ref={experienceRef}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional journey and achievements
            </p>
          </div>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Junior Full Stack Developer</h4>
                <span className="company">Yonder</span>
                <span className="period">Mar 2025 - Sept 2025</span>
                <p>Built .NET + Angular applications and Vue-based projects serving 11 hospitals. Developed Autoinstaller and OSB API.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Full Stack Volunteer Developer</h4>
                <span className="company">Trizan</span>
                <span className="period">Dec 2024 - Mar 2025</span>
                <p>Engineered a free website-builder platform with optimized database design and secure JWT authentication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" ref={contactRef}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss opportunities and collaborations
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:ionutherbil@gmail.com">ionutherbil@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>Phone</span>
              <a href="tel:+40753913709">+40 753 913 709</a>
            </div>
            <div className="contact-item">
              <span>Location</span>
              <span>Cluj-Napoca, Romania</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;