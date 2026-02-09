import React from 'react';
import styles from './CapabilityCard.module.css';

const CapabilityCard = ({ capability }) => {
  const { icon, title, summary, tags } = capability;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default CapabilityCard;