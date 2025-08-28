// src/components/Layout.jsx
import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      {/* Main content wrapper with consistent padding and max width */}
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex' }}>
        <div className="container" style={{ width: '100%' }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
