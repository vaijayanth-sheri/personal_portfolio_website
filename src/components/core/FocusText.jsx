import React, { useState, useRef } from 'react';
import styles from './FocusText.module.css';

const FocusText = ({ children, className = '', as: Component = 'div', ...props }) => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <Component
      ref={ref}
      className={`${styles.focusWrapper} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${pos.x}px`,
        '--mouse-y': `${pos.y}px`,
      }}
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
