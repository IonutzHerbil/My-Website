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

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('bounce');
        setTimeout(() => link.classList.remove('bounce'), 2000);
      }, index * 500);
    });
  }, []);

  return (
    <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
      <div className="topnav-inner">
        <Link className="brand" to="/">
          <img 
            src="/ioan-herbil-high-resolution-logo-transparent.png" 
            alt="Ioan Herbil Logo" 
            className="brand-logo"
          />
          <span className="brand-name">Ioan Herbil</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link className={`nav-link hoverable ${activeLink === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`nav-link hoverable ${activeLink === '/cv' ? 'active' : ''}`} to="/cv">
                CV
              </Link>
            </li>
            <li>
              <Link className={`nav-link hoverable ${activeLink === '/projects' ? 'active' : ''}`} to="/projects">
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