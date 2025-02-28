// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container text-center">
        <p>
          Contact: <a href="mailto:ionutherbil@gmail.com">ionutherbil@gmail.com</a> | Phone: 0753913709
        </p>
        <p>&copy; {new Date().getFullYear()} Ioan Herbil. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
