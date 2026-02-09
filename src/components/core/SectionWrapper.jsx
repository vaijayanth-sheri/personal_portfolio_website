import React from 'react';

// This is a placeholder component.
const SectionWrapper = ({ title, children }) => (
  <section style={{ marginBottom: 'var(--space-16)' }}>
    <h2 style={{ marginBottom: 'var(--space-8)' }}>{title}</h2>
    {children}
  </section>
);
export default SectionWrapper;