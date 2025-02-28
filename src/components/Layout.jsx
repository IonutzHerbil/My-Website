// src/components/Layout.jsx
import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      {/* Add top padding equal to the navbar height */}
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
