import React from 'react';
import { capabilitiesData } from '../data/capabilities';
import CapabilityCard from '../components/core/CapabilityCard';
import styles from './Capabilities.module.css';

const Capabilities = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Capabilities</h1>
        <p className={styles.subtitle}>
          Repeatable, outcome-oriented systems designed to solve complex challenges in the energy domain.
        </p>
      </header>
      <div className={styles.grid}>
        {capabilitiesData.map(cap => (
          <CapabilityCard key={cap.id} capability={cap} />
        ))}
      </div>
    </div>
  );
};

export default Capabilities;