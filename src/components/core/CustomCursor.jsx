import React, { useEffect, useState, useCallback, useRef } from 'react';
import styles from './CustomCursor.module.css';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor-pointer]';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const isTouchDevice = useRef(false);

  // Detect touch device once on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      isTouchDevice.current = true;
    }
  }, []);

  // Use event delegation on document for hover detection.
  // This is robust across DOM changes (route transitions, dynamic content).
  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the element under the cursor (or any ancestor) matches an interactive selector
      const target = e.target;
      const isInteractive = target.closest(INTERACTIVE_SELECTOR) !== null;
      setLinkHovered(isInteractive);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice.current) {
    return null;
  }

  const glowClasses = [
    styles.glow,
    clicked ? styles.clicked : '',
    linkHovered ? styles.hovered : '',
    hidden ? styles.hidden : ''
  ].join(' ');

  return (
    <div
      className={glowClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div className={styles.crosshairX}></div>
      <div className={styles.crosshairY}></div>
      <div className={styles.pulse}></div>
    </div>
  );
};

export default CustomCursor;
