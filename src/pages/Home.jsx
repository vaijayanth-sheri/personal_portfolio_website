import React from 'react';
import { homeData } from '../data/home';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import profilePhoto from '/media/Profile_Sheri.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// New Animation Imports
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

const Home = () => {
  const { hero, selectedWork, capabilityGrid, howIWork, stackStrip, collaboration } = homeData;

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container}>
      
      {/* Mesh Gradients behind container */}
      <div className={styles.meshBg}>
        <div className={styles.meshBlob1}></div>
        <div className={styles.meshBlob2}></div>
        <div className={styles.meshBlob3}></div>
      </div>

      {/* 1 · Hero */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroInner}
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.heroPhoto}>
            <div className={styles.photoWrapper}>
              <img src={profilePhoto} alt="Vaijayanth Sheri" className={styles.profileImg} />
              <div className={styles.photoGlow}></div>
            </div>
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.name}>{hero.name}</h1>
            <h2 className={styles.title}>{hero.title}</h2>
            <p className={styles.subheadline}>{hero.subheadline}</p>
            <div className={styles.heroCtas}>
              <Link to={hero.ctaPrimary.to} className={styles.btnPrimary} data-cursor-pointer="true">{hero.ctaPrimary.label}</Link>
              <Link to={hero.ctaSecondary.to} className={styles.btnSecondary} data-cursor-pointer="true">{hero.ctaSecondary.label}</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2 · Selected Work */}
      <section className={styles.selectedWorkSection}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInVariant}
           transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionHeading}>Featured Projects</h2>
          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              grabCursor={false}
              centeredSlides={true}
              initialSlide={1}
              slidesPerView={'auto'}
              spaceBetween={24}
              navigation={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 80,
                modifier: 2,
                slideShadows: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 1.5, spaceBetween: 24 },
                1024: { slidesPerView: 2.2, spaceBetween: 28 },
              }}
              className={styles.swiper}
            >
              {selectedWork.map((project) => (
                <SwiperSlide key={project.id} className={styles.swiperSlide}>
                  <Tilt 
                    tiltMaxAngleX={4} 
                    tiltMaxAngleY={4} 
                    glareEnable={true} 
                    glareMaxOpacity={0.15} 
                    glareColor="#ffffff" 
                    glarePosition="all"
                    className={styles.tiltWrapper}
                  >
                    <article className={styles.projectCard} data-cursor-pointer="true">
                      <div className={styles.projectScreenshot}>
                        {project.screenshot && project.screenshot.includes('[TODO') ? (
                          <span className={styles.screenshotPlaceholder}>{project.screenshot}</span>
                        ) : (
                          <img src={project.screenshot} alt={`${project.name} Screenshot`} className={styles.screenshotImg} />
                        )}
                      </div>
                      <div className={styles.projectContent}>
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.projectOneLiner}>{project.oneLiner}</p>
                        <ul className={styles.projectFlow}>
                          <li><strong>Problem:</strong> {project.problem}</li>
                          <li><strong>Approach:</strong> {project.approach}</li>
                          <li><strong>Output:</strong> {project.output}</li>
                        </ul>
                        <div className={styles.projectLinks}>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn} data-cursor-pointer="true">Demo</a>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn} data-cursor-pointer="true">Repo</a>
                        </div>
                      </div>
                    </article>
                  </Tilt>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.moreProjects}>
            <Link to="/projects" className={styles.moreLink} data-cursor-pointer="true">More Projects →</Link>
          </div>
        </motion.div>
      </section>

      {/* 3 · Capability Grid */}
      <section className={styles.capSection}>
        <motion.h2 
          className={styles.sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          What I Build
        </motion.h2>
        <div className={styles.capGrid}>
          {capabilityGrid.map((tile, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} glareColor="#4db6ac" glarePosition="all" className={styles.tiltWrapper}>
                <div className={styles.capTile} data-cursor-pointer="true">
                  <span className={styles.capIcon}>{tile.icon}</span>
                  <h4 className={styles.capTitle}>{tile.title}</h4>
                  <p className={styles.capTools}>{tile.tools}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 · How I Work */}
      <section className={styles.processSection}>
        <motion.h2 
          className={styles.sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          How I Work
        </motion.h2>
        <div className={styles.processGrid}>
          {howIWork.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.processStep}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className={styles.stepNumber}>{step.step}</span>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5 · Stack Strip */}
      <section className={styles.stackSection}>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <Marquee gradient={true} gradientColor="#0D1117" speed={40} className={styles.marqueeContainer}>
            {stackStrip.map((tool, i) => (
              <span key={i} className={styles.stackChip}>{tool}</span>
            ))}
            {/* Duplicate for smoother loop if stackStrip is short */}
            {stackStrip.map((tool, i) => (
              <span key={i + 100} className={styles.stackChip}>{tool}</span>
            ))}
          </Marquee>
        </motion.div>
      </section>

      {/* 6 · Collaboration CTA */}
      <section className={styles.collabSection}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInVariant}
           transition={{ duration: 0.6 }}
        >
          <h2 className={styles.collabTitle}>{collaboration.title}</h2>
          <p className={styles.collabText}>{collaboration.description}</p>
          <Link to={collaboration.ctaTo} className={styles.btnPrimary} data-cursor-pointer="true">{collaboration.ctaLabel}</Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;