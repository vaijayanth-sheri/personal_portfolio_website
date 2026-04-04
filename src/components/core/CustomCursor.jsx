import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [data-cursor-pointer]').forEach(el => {
        el.addEventListener('mouseover', () => setLinkHovered(true));
        el.addEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    const timeout = setTimeout(handleLinkHoverEvents, 500);

    return () => {
      clearTimeout(timeout);
      removeEventListeners();
      document.querySelectorAll('a, button, [data-cursor-pointer]').forEach(el => {
        if (el) {
          el.removeEventListener('mouseover', () => setLinkHovered(true));
          el.removeEventListener('mouseout', () => setLinkHovered(false));
        }
      });
    };
  }, []);

  const glowClasses = [
    styles.glow,
    clicked ? styles.clicked : '',
    linkHovered ? styles.hovered : '',
    hidden ? styles.hidden : ''
  ].join(' ');

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={glowClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    ></div>
  );
};

export default CustomCursor;
