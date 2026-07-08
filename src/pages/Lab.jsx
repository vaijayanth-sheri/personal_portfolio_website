import { labData } from '../data/lab';
import styles from './Lab.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FocusText from '../components/core/FocusText';

const Lab = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FocusText>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Lab
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ongoing Research & Development // Prototyping Digital Energy Systems
          </motion.p>
        </FocusText>
      </header>

      <div className={styles.gridContainer}>
        {labData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className={styles.labLink}>
            <motion.article 
              className={styles.labCard} 
              data-id={project.id.toUpperCase()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.labScreenshot}>
                <img src={project.heroImage} alt={project.title} />
                <div className={styles.labOverlay}>
                  <span className={styles.statusBadge}>{project.status.toUpperCase()}</span>
                </div>
              </div>
              <div className={styles.labContent}>
                <h3 className={styles.labName}>{project.title}</h3>
                <p className={styles.labOneLiner}>{project.oneLiner}</p>
                <p className={styles.labDesc}>{project.overview}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lab;