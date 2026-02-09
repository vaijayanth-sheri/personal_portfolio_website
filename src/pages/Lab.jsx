import React from 'react';
import SectionWrapper from '../components/core/SectionWrapper';
import { labData } from '../data/lab';

const Lab = () => {
  return (
    <SectionWrapper title="Lab">
      <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
        {labData.map(item => (
          <div key={item.id} style={{ border: '1px solid var(--color-border)', padding: 'var(--space-6)', borderRadius: '4px' }}>
            <h3>{item.name} <small>({item.status})</small></h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Lab;