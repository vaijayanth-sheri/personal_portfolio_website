import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/capabilities', label: 'Capabilities' },
  { path: '/projects', label: 'Projects' },
  { path: '/lab', label: 'Lab' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          Owner Name // Builder
        </NavLink>
        <ul className={styles.navList}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;