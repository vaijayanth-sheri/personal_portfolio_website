import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { labData } from '../data/lab';
import ImageModal from '../components/core/ImageModal';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Search in both datasets
    const project = projectsData.find(p => p.id === id) || labData.find(p => p.id === id);
    const isLabProject = labData.some(p => p.id === id);
    const backPath = isLabProject ? '/lab' : '/projects';
    const backLabel = isLabProject ? 'Back to Lab' : 'Back to Projects';
    
    const allImages = React.useMemo(() => {
        if (!project) return [];
        let imgs = [];
        if (project.heroImage && !project.heroImage.includes('placehold.co')) {
            imgs.push(project.heroImage);
        }
        if (project.gallery && project.gallery.length > 0) {
            const validGallery = project.gallery.filter(g => typeof g === 'string' && !g.includes('placehold.co'));
            imgs.push(...validGallery);
        }
        return imgs;
    }, [project]);

    const [modalIndex, setModalIndex] = useState(null);

    // Removed the window.scrollTo(0,0) here to allow native react-router scroll restoration
    // to keep your scroll position on "Back".

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project not found</h2>
                <Link to={backPath} className={styles.backLink}>← {backLabel}</Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {modalIndex !== null && (
                <ImageModal 
                    images={allImages} 
                    initialIndex={modalIndex}
                    onClose={() => setModalIndex(null)} 
                />
            )}
            <Link to={backPath} className={styles.backButton}>
                <span>←</span> {backLabel}
            </Link>

            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <span className={styles.role}>{project.role}</span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.duration}>{project.duration}</span>
                        {project.links?.github && project.links.github !== '#' && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                GitHub ↗
                            </a>
                        )}
                        {project.links?.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                Live Demo ↗
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div 
                className={styles.heroImageWrapper} 
                onClick={() => {
                    const idx = allImages.indexOf(project.heroImage);
                    if (idx !== -1) setModalIndex(idx);
                }}
                data-cursor-pointer="true"
            >
                <img src={project.heroImage} alt={project.title} className={styles.heroImage} />
            </div>

            <div className={styles.grid}>
                <div className={styles.mainContent}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.overviewText}>{project.overview}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Key Features</h2>
                        <ul className={styles.featureList}>
                            {project.features?.map((feature, index) => (
                                // Assuming features might be markdown-like strings in data, but rendering plain text for now.
                                // If the data has bold markers like **text**, we clean it for cleaner display or use a parser if needed.
                                // For simplicity here, we'll strip markers or render as is.
                                <li key={index} className={styles.featureItem}>
                                    {feature.replace(/\*\*/g, '')}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.techPanel}>
                        <h3 className={styles.panelTitle}>Tech Stack</h3>
                        {project.techStackDetailed ? (
                            <div className={styles.techDetailed}>
                                {Object.entries(project.techStackDetailed).map(([category, stack]) => (
                                    <div key={category} className={styles.techCategory}>
                                        <span className={styles.techLabel}>{category}:</span>
                                        <span className={styles.techValue}>{stack}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.tagCloud}>
                                {project.tech.map((t, i) => <span key={i} className={styles.techTag}>{t}</span>)}
                            </div>
                        )}
                    </div>

                    <div className={`${styles.techPanel} ${styles.impactPanel}`}>
                        <h3 className={styles.panelTitle}>Impact</h3>
                        <p className={styles.impactText}>{project.impact}</p>
                    </div>
                </aside>
            </div>

            {project.gallery && project.gallery.length > 0 && (
                <section className={styles.gallerySection}>
                    <h2 className={styles.sectionTitle}>Gallery</h2>
                    <div className={styles.galleryGrid}>
                        {project.gallery.map((img, index) => (
                            <div 
                                key={index} 
                                className={styles.galleryItem}
                                onClick={() => {
                                    const isPlaceholder = typeof img === 'string' && img.includes('placehold.co');
                                    if (!isPlaceholder) {
                                        const idx = allImages.indexOf(img);
                                        if (idx !== -1) setModalIndex(idx);
                                    }
                                }}
                                data-cursor-pointer="true"
                            >
                                <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetail;
