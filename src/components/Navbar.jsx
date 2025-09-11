import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="topnav-inner">
        <Link className="brand" to="/">
          <div className="brand-logo">IH</div>
          <span className="brand-name">Ioan Herbil</span>
        </Link>
        <nav className="nav-links">
          <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/">Home</Link>
          <Link className={`nav-link ${activeLink === '/cv' ? 'active' : ''}`} to="/cv">CV</Link>
          <Link className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default CustomNavbar;