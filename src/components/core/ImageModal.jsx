import React, { useEffect, useState } from 'react';
import styles from './ImageModal.module.css';

const ImageModal = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Also close on escape key and handle arrows for navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && images.length > 1) {
                setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }
            if (e.key === 'ArrowLeft' && images.length > 1) {
                setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className={styles.overlay} onClick={onClose} data-cursor-pointer="true">
            <button className={styles.closeBtn} onClick={onClose} data-cursor-pointer="true">&times;</button>
            
            {images.length > 1 && (
                <button className={styles.navBtnLeft} onClick={handlePrev} data-cursor-pointer="true">
                    &#10094;
                </button>
            )}

            <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex]} alt={`Full Resolution ${currentIndex + 1}`} className={styles.fullImage} />
            </div>

            {images.length > 1 && (
                <button className={styles.navBtnRight} onClick={handleNext} data-cursor-pointer="true">
                    &#10095;
                </button>
            )}
        </div>
    );
};

export default ImageModal;
