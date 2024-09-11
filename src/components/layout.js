// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar'; // Adjust the import path as needed

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Determine if the current path should hide the Navbar
  const hideNavbarPages = ['/zara', '/portfolio'];
  const shouldHideNavbar = hideNavbarPages.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
