import React from 'react';
import styles from './SectionWrapper.module.css';

const SectionWrapper = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);
export default SectionWrapper;