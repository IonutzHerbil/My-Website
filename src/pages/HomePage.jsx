// src/pages/HomePage.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

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

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="monospace">👋 Hi, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Ioan Herbil</span>
          </h1>
          <p className="hero-subtitle">
            Computer Engineering student crafting human-centered software and performant systems.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-primary hover-lift">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/cv" className="cta-secondary hover-lift">
              <span>See CV</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">My Skills</h2>
            <p className="features-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card hover-lift">
              <div className="feature-icon">
                <span>⚛️</span>
              </div>
              <h3 className="feature-title">Frontend</h3>
              <p className="feature-description">
                React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
              </p>
            </div>
            <div className="feature-card hover-lift">
              <div className="feature-icon">
                <span>🔧</span>
              </div>
              <h3 className="feature-title">Backend</h3>
              <p className="feature-description">
                Node.js, Python, C++, .NET, REST APIs, GraphQL, Databases
              </p>
            </div>
            <div className="feature-card hover-lift">
              <div className="feature-icon">
                <span>🛠️</span>
              </div>
              <h3 className="feature-title">Tools</h3>
              <p className="feature-description">
                Git, Docker, VS Code, Figma, Postman, Vite, Webpack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:ionutherbil@gmail.com">ionutherbil@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <a href="tel:+40753913709">+40 753 913 709</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;