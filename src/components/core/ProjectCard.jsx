import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import TechIcon from '../../utils/iconMapping';

const ProjectCard = ({ project }) => {
  const { id, title, role, summary, impact, tech, links } = project;

  return (
    <article className={styles.card}>
      <Link to={`/projects/${id}`} className={styles.cardLink} title="View Project Details">
        {project.heroImage && !project.heroImage.includes('placehold.co') && (
          <div className={styles.imageContainer}>
             <img src={project.heroImage} alt={title} className={styles.heroImage} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.role}>{role}</span>
            <span className={styles.arrowIcon}>↗</span>
          </div>

          <h3 className={styles.title}>{title}</h3>

          <div className={styles.techStack}>
            {tech.slice(0, 4).map((item, index) => (
              <span key={index} className={styles.techTag}>
                <TechIcon name={item} className={styles.techIcon} />
                {item}
              </span>
            ))}
            {tech.length > 4 && <span className={styles.techTag}>+{tech.length - 4}</span>}
          </div>

          <p className={styles.summary}>{summary}</p>

          <div className={styles.impact}>
            {impact}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;