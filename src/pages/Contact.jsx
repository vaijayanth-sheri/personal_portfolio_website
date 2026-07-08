import React from 'react';
import { contactData } from '../data/contact';
import styles from './Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import FocusText from '../components/core/FocusText';

const Contact = () => {
  const { statement, engagement, contactInfo, closing } = contactData;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FocusText>
          <h1 className={styles.title}>{statement.title}</h1>
          <h2 className={styles.subtitle}>{statement.heading}</h2>
        </FocusText>
      </header>

      <section className={styles.intro}>
        <FocusText>
          <p>{statement.text}</p>
        </FocusText>
      </section>

      <section className={styles.engagementSection}>
        <FocusText>
          <h3 className={styles.sectionTitle}>{engagement.title}</h3>
          <ul className={styles.categoryList}>
            {engagement.categories.map((cat, index) => (
              <li key={index} className={styles.categoryItem}>{cat}</li>
            ))}
          </ul>
        </FocusText>
      </section>

      <section className={styles.contactDetails}>
        <FocusText>
          <h3 className={styles.sectionTitle}>{contactInfo.title}</h3>
          <p className={styles.contactText}>{contactInfo.text}</p>
        </FocusText>

        <div className={styles.detailRow}>
          <span className={styles.iconWrapper}><FaEnvelope className={styles.icon} /></span>
          <div className={styles.detailContent}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.iconWrapper}><FaGithub className={styles.icon} /></span>
          <div className={styles.detailContent}>
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">github.com/vaijayanth-sheri</a>
            </span>
          </div>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.iconWrapper}><FaLinkedin className={styles.icon} /></span>
          <div className={styles.detailContent}>
            <span className={styles.label}>LinkedIn</span>
            <span className={styles.value}>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/vaijayanth-sheri</a>
            </span>
          </div>
        </div>
      </section>

      <FocusText>
        <p className={styles.closing}>{closing}</p>
      </FocusText>
    </div>
  );
};

export default Contact;