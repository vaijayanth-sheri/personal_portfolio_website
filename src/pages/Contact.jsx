import React from 'react';
import { contactData } from '../data/contact';
import styles from './Contact.module.css';

const Contact = () => {
  const { statement, engagement, contactInfo, closing } = contactData;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{statement.title}</h1>
        <h2 className={styles.subtitle}>{statement.heading}</h2>
      </header>

      <section className={styles.intro}>
        <p>{statement.text}</p>
      </section>

      <section className={styles.engagementSection}>
        <h3 className={styles.sectionTitle}>{engagement.title}</h3>
        <ul className={styles.categoryList}>
          {engagement.categories.map((cat, index) => (
            <li key={index} className={styles.categoryItem}>{cat}</li>
          ))}
        </ul>
      </section>

      <section className={styles.contactDetails}>
        <h3 className={styles.sectionTitle}>{contactInfo.title}</h3>
        <p style={{ marginBottom: '1.5rem', color: '#b0bec5' }}>{contactInfo.text}</p>

        <div className={styles.detailRow}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.label}>GitHub:</span>
          <span className={styles.value}>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">github.com/vaijayanth-sheri</a>
          </span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.label}>LinkedIn:</span>
          <span className={styles.value}>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/vaijayanth-sheri</a>
          </span>
        </div>
      </section>

      <p className={styles.closing}>{closing}</p>
    </div>
  );
};

export default Contact;