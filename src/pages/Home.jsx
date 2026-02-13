import React from 'react';
import { homeData } from '../data/home';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { hero, capabilities, currentFocus, collaboration } = homeData;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.name}>{hero.name}</h1>
        <h2 className={styles.title}>{hero.title}</h2>
        <p className={styles.tagline}>{hero.tagline}</p>
        <p className={styles.summary}>{hero.summary}</p>
      </section>

      {/* Capabilities Snapshot */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.icon}>{capabilities.icon}</span> {capabilities.title}
        </h3>
        <p className={styles.text}>{capabilities.description}</p>
      </section>

      {/* Current Direction */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.icon}>{currentFocus.icon}</span> {currentFocus.title}
        </h3>
        <p className={styles.text}>{currentFocus.description}</p>
      </section>

      {/* Collaboration Call to Action */}
      <section className={styles.collaborationBox}>
        <h3 className={styles.collabTitle}>
          <span className={styles.icon}>{collaboration.icon}</span> {collaboration.title}
        </h3>
        <p className={styles.collabText}>{collaboration.description}</p>
        <Link to="/contact" className={styles.button}>Let's Collaborate</Link>
      </section>
    </div>
  );
};

export default Home;