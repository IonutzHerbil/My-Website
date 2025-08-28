import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '40px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
             onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
            Home
          </Link>
          <Link to="/projects" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
             onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
            Projects
          </Link>
          <Link to="/cv" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
             onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
            CV
          </Link>
        </div>
        
        <div style={{
          color: 'var(--color-text-muted)',
          fontSize: '14px',
          marginBottom: '16px'
        }}>
          Built with React & Vite
        </div>
        
        <div style={{
          color: 'var(--color-text-muted)',
          fontSize: '14px'
        }}>
          © 2024 My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;