// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to my website!</h1>
        <p>I am a young computer engineering student at the Technical University of Cluj-Napoca</p>
      </header>
      <section className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Feel free to explore my CV and interactive projects!</h2>
          <p>
            Discover my work, skills, and passion for creating projects and learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;