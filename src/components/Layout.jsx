// src/components/Layout.jsx
import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
            <main style={{
        paddingTop: '80px',
        minHeight: 'calc(100vh - 80px)',
        flex: '1',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="container" style={{ 
          width: '100%', 
          flex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
