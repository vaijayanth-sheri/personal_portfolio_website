import React from 'react';
import { profileData } from '../data/profile';
import styles from './About.module.css';

const About = () => {
  const { about, experience, education, contact } = profileData;

  return (
    <div className={styles.container}>
      {/* About Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{about.title}</h2>
        <p className={styles.aboutText}>{about.content}</p>
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{experience.title}</h2>
        <div className={styles.experienceList}>
          {experience.roles.map((role) => (
            <div key={role.id} className={styles.experienceItem}>
              <div className={styles.roleHeader}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <div className={styles.roleSubtitle}>
                  {role.role} <span className={styles.roleDate}> | {role.date}</span>
                </div>
              </div>
              <p className={styles.roleDescription}>{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{education.title}</h2>
        {education.items.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.degree}>{item.degree}</h3>
            {item.institution && <div className={styles.institution}>{item.institution}</div>}
            <p className={styles.eduDetails}>{item.details}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <h2 className={styles.sectionTitle}>{contact.title}</h2>
        <p className={styles.contactContent}>{contact.content}</p>
        <div className={styles.linkGroup}>
          <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub ↗</a>
          <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn ↗</a>
          <a href={contact.links.behance} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Behance ↗</a>
          <a href={`mailto:${contact.links.email}`} className={styles.contactLink}>Email ✉</a>
        </div>
      </section>
    </div>
  );
};

export default About;