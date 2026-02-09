import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Owner Name. All Rights Reserved.</p>
        <p>Built as a capability platform, not a portfolio template.</p>
      </div>
    </footer>
  );
};

export default Footer;