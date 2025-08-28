// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="monospace" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Hi, I'm</div>
        <h1>Ioan Herbil</h1>
        <p>Computer Engineering student crafting human-centered software and performant systems.</p>
      </header>
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Explore my work</h2>
          <p>
            Dive into my CV and interactive projects—from AI doodle recognition to data-driven visualizations.
          </p>
          <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/cv" className="btn">See CV</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;