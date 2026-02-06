import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="topnav-inner">
        <Link className="brand" to="/" onClick={closeMobileMenu}>
          <img
            src="/ioan-herbil-high-resolution-logo-transparent.png"
            alt="Ioan Herbil Logo"
            className="brand-logo"
          />
          <span className="brand-name">Ioan Herbil</span>
        </Link>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link
                className={`nav-link hoverable ${activeLink === '/' ? 'active' : ''}`}
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link hoverable ${activeLink === '/cv' ? 'active' : ''}`}
                to="/cv"
                onClick={closeMobileMenu}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link hoverable ${activeLink === '/projects' ? 'active' : ''}`}
                to="/projects"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CustomNavbar;