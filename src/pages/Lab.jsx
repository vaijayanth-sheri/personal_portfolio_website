import React from 'react';
import SectionWrapper from '../components/core/SectionWrapper';
import { labData } from '../data/lab';
import styles from './Lab.module.css';

const Lab = () => {
  return (
    <SectionWrapper title="Lab">
      <div className={styles.labGrid}>
        {labData.map(item => (
          <div key={item.id} className={styles.labItem}>
            <h3>{item.name} <small>({item.status})</small></h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Lab;