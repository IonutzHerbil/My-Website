import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/cv">CV</Link>
        </div>
        
        <div className="footer-built-with">
          Built with React & Vite
        </div>
        
        <div className="footer-copyright">
          2024 Ioan Herbil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;