import React from 'react';
import ProjectCard from '../components/core/ProjectCard';
import { projectsData } from '../data/projects';
import styles from './Projects.module.css';
import FocusText from '../components/core/FocusText';

const Projects = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FocusText>
          <h2 className={styles.title}>All Projects</h2>
          <p className={styles.subtitle}>
            Exploring energy systems, data visualization, and sustainable tech through code.
          </p>
        </FocusText>
      </header>

      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;