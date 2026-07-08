import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { homeData } from '../../data/home.js';
import { FaHome, FaBolt, FaBriefcase, FaFlask, FaUser, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
const navLinks = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/capabilities', label: 'Capabilities', icon: <FaBolt /> },
  { path: '/projects', label: 'Projects', icon: <FaBriefcase /> },
  { path: '/lab', label: 'Lab', icon: <FaFlask /> },
  { path: '/about', label: 'About', icon: <FaUser /> },
  { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <NavLink to="/" className={styles.logo}>
          {homeData.hero.name} // Builder
        </NavLink>

        {/* Desktop Navigation */}
        <ul className={styles.navList} role="list">
          {navLinks.map(({ path, label, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                <span className={styles.navIcon}>{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerIcon}></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className={styles.mobileOverlay}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            ></div>
            <div className={styles.mobileMenu} role="dialog" aria-modal="true">
              <ul className={styles.mobileNavList}>
                {navLinks.map(({ path, label, icon }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={styles.mobileNavIcon}>{icon}</span>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;