import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;