import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project not found</h2>
                <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Link to="/projects" className={styles.backButton}>
                <span>←</span> Back to Projects
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

            <div className={styles.heroImageWrapper}>
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
                            <div key={index} className={styles.galleryItem}>
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
