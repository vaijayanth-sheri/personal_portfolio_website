import React from 'react';
import styles from './Footer.module.css';
import { homeData } from '../../data/home.js';
import { contactData } from '../../data/contact.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contactInfo } = contactData;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href={`mailto:${contactInfo.email}`} aria-label="Email" className={styles.socialLink}>
            <FaEnvelope />
          </a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
            <FaGithub />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {currentYear} {homeData.hero.name}. All Rights Reserved.</p>
        <p>Built as a capability platform, not a portfolio template.</p>
      </div>
    </footer>
  );
};

export default Footer;