import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
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
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;