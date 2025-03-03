import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
// Import the logo image
import WebsiteLogo from '../assets/WebsiteLogo.png';

const CustomNavbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  // Start with collapsed state by default
  const [collapsed, setCollapsed] = useState(true);
  
  useEffect(() => {
    // Set active link based on current location
    setActiveLink(location.pathname);
    
    // Apply initial collapsed state to body on component mount
    document.body.classList.add('nav-collapsed');
    
    // Ensure navbar stays collapsed on mobile
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
        document.body.classList.add('nav-collapsed');
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once on initial render
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);
  
  const toggleNavbar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    
    // Toggle body class to adjust main content
    if (newState) {
      document.body.classList.add('nav-collapsed');
    } else {
      document.body.classList.remove('nav-collapsed');
    }
  };

  return (
    <>
      {/* Backdrop for mobile - only visible when navbar is open on mobile */}
      <div 
        className={`navbar-backdrop ${collapsed ? 'collapsed' : ''}`} 
        onClick={toggleNavbar}
      ></div>
      
      {/* Main navbar */}
      <nav className={`custom-navbar ${collapsed ? 'collapsed' : ''}`}>
        <div className="navbar-header">
          <div className="navbar-brand">
            {/* Logo container with image */}
            <div className="logo-container">
              <img src={WebsiteLogo} alt="Logo" className="navbar-logo-img" />
            </div>
            <h4 className="brand-name">Herbil Ioan</h4>
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
      
      {/* Toggle button that moves right when navbar opens */}
      <button 
        className={`nav-toggle-btn ${collapsed ? 'collapsed' : ''}`} 
        onClick={toggleNavbar} 
        aria-label="Toggle navigation"
      >
        <span className="hamburger-icon">☰</span>
      </button>
    </>
  );
};

export default CustomNavbar;