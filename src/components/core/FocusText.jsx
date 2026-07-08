import React, { useState } from 'react';
import styles from './FocusText.module.css';

const FocusText = ({ children, className = '', as: Component = 'div', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      className={`${styles.focusWrapper} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div 
        className={`${styles.focusBlurLayer} ${isHovered ? styles.active : ''}`} 
      />
      <div className={styles.focusContent}>
        {children}
      </div>
    </Component>
  );
};

export default FocusText;
