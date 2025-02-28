import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  
  useEffect(() => {
    setActiveLink(location.pathname);
    
    // Check if navbar state is saved
    const savedState = localStorage.getItem('navbarCollapsed');
    if (savedState) {
      setCollapsed(savedState === 'true');
    }
    
    // Handle resize for responsive behavior
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);
  
  const toggleNavbar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem('navbarCollapsed', newState);
    document.body.classList.toggle('nav-collapsed', newState);
  };

  return (
    <>
      <div className={`navbar-backdrop ${collapsed ? 'collapsed' : ''}`} onClick={toggleNavbar}></div>
      
      <nav className={`custom-navbar ${collapsed ? 'collapsed' : ''}`}>
        <div className="navbar-header">
          <div className="navbar-brand">
            <div className="logo-container">
              <span className="navbar-logo">YD</span>
            </div>
            <h4 className="brand-name">Your Brand</h4>
          </div>
        </div>
        
        <div className="navbar-divider">
          <span>Navigation</span>
        </div>
        
        <div className="navbar-content">
          <Link
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
            to="/"
          >
            <div className="icon-container">
              <i className="bi bi-house-door"></i>
            </div>
            <span className="link-text">Home</span>
          </Link>
          
          <Link
            className={`nav-link ${activeLink === '/cv' ? 'active' : ''}`}
            to="/cv"
          >
            <div className="icon-container">
              <i className="bi bi-file-person"></i>
            </div>
            <span className="link-text">CV</span>
          </Link>
          
          <Link
            className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
            to="/projects"
          >
            <div className="icon-container">
              <i className="bi bi-briefcase"></i>
            </div>
            <span className="link-text">Projects</span>
          </Link>
        </div>
      </nav>
      
      {/* Separate toggle button outside the navbar */}
      <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="Toggle navigation">
        <span className="hamburger-icon">☰</span>
      </button>
    </>
  );
};

export default CustomNavbar;