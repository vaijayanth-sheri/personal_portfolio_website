import React from 'react';
import { homeData } from '../data/home';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import profilePhoto from '/media/Profile_Sheri.jpg';
import jobTrackerImg from '/media/Job application tracker/homepage.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import FocusText from '../components/core/FocusText';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// New Animation Imports
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';

const Home = () => {
  const { hero, selectedWork, capabilityGrid, howIWork, stackStrip, collaboration } = homeData;
  const navigate = useNavigate();

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Parse hero title into clean segments without dangling pipes
  const titleSegments = hero.title.split('|').map(s => s.trim()).filter(Boolean);

  return (
    <div className={styles.container}>

      {/* 1 · Hero */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.heroPhoto}>
            <div className={styles.photoWrapper}>
              <img src={profilePhoto} alt="Vaijayanth Sheri" className={styles.profileImg} />
            </div>
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.name}>
              {hero.name.split(' ')[0]} <span className={styles.highlightName}>{hero.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <FocusText>
              <h2 className={styles.title}>
                {titleSegments.map((tag, index, arr) => (
                  <span key={index} style={{ display: 'block', marginBottom: '0.3rem' }}>
                    {tag}{index < arr.length - 1 ? ' /' : ''}
                  </span>
                ))}
              </h2>
              <p className={styles.subheadline}>{hero.subheadline}</p>
            </FocusText>
            <div className={styles.heroCtas}>
              <Link to={hero.ctaPrimary.to} className={styles.btnPrimary} data-cursor-pointer="true">{hero.ctaPrimary.label}</Link>
              <Link to={hero.ctaSecondary.to} className={styles.btnSecondary} data-cursor-pointer="true">{hero.ctaSecondary.label}</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 1.5 · JobTracker Featured Tool */}
      <section className={styles.jobTrackerSection}>
        <motion.div
          className={styles.jobTrackerContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.jobTrackerInfo}>
            <span className={styles.jobTrackerTagline}>To help Job seekers</span>
            <h2 className={styles.jobTrackerTitle}>JobTracker</h2>
            <p className={styles.jobTrackerDesc}>
              An AI-powered platform designed to streamline your job search. Track applications, organize contacts, and instantly generate tailored CV bullets and cover letters using an advanced Retrieval-Augmented Generation (RAG) engine powered by Gemini AI.
            </p>
            <div className={styles.jobTrackerTech}>
              <span>Next.js 14</span>
              <span>Supabase</span>
              <span>Gemini 2.5 Flash</span>
              <span>Tailwind CSS</span>
            </div>
            <div className={styles.jobTrackerActions}>
              <a href="https://job-application-tracker-tan-seven.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryGlow} data-cursor-pointer="true">
                Try now
              </a>
              <Link to="/projects/job-tracker" className={styles.projectBtn} data-cursor-pointer="true">
                View Details
              </Link>
            </div>
          </div>
          <Link to="/projects/job-tracker" className={styles.jobTrackerVisual} data-cursor-pointer="true">
            <img src={jobTrackerImg} alt="JobTracker Interface" />
          </Link>
        </motion.div>
      </section>

      {/* 2 · Selected Work */}
      <section className={styles.selectedWorkSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionHeading}>Featured Projects</h2>
          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Navigation]}
              grabCursor={false}
              slidesPerView={'auto'}
              spaceBetween={0}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 1.2 },
                1400: { slidesPerView: 1.5 },
              }}
              className={styles.swiper}
            >
              {selectedWork.map((project) => (
                <SwiperSlide key={project.id} className={styles.swiperSlide}>
                  <article className={styles.projectCard} data-id={project.id.toUpperCase()}>
                    <Link to={`/projects/${project.id}`} className={styles.cardOverlayLink} data-cursor-pointer="true" aria-label={`View ${project.name} project details`}>
                      <div className={styles.projectScreenshot}>
                        {project.screenshot && typeof project.screenshot === 'string' && project.screenshot.includes('[TODO') ? (
                          <div className={styles.screenshotFallback} aria-hidden="true" />
                        ) : (
                          <img src={project.screenshot} alt={`${project.name} Screenshot`} className={styles.screenshotImg} />
                        )}
                      </div>
                      <div className={styles.projectContent}>
                        <div className={styles.projectHeader}>
                          <h3 className={styles.projectName}>{project.name}</h3>
                          {project.isLab && <span className={styles.labBadge}>LAB / ONGOING</span>}
                        </div>
                        <p className={styles.projectOneLiner}>{project.oneLiner}</p>
                        <ul className={styles.projectFlow}>
                          <li><strong>The Challenge</strong> {project.problem}</li>
                          <li><strong>The Solution</strong> {project.approach}</li>
                          <li><strong>The Outcome</strong> {project.output}</li>
                        </ul>
                      </div>
                    </Link>
                    {/* External links are OUTSIDE the card link to avoid nesting */}
                    <div className={styles.projectLinks}>
                      {project.demo && project.demo !== '#' && !project.demo.includes('[TODO') && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn} data-cursor-pointer="true">Execute Demo</a>
                      )}
                      {project.repo && project.repo !== '#' && !project.repo.includes('[TODO') && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn} data-cursor-pointer="true">Source Code</a>
                      )}
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.moreProjects}>
            <Link to="/projects" className={styles.moreLink} data-cursor-pointer="true">Access Full Archive //</Link>
          </div>
        </motion.div>
      </section>

      {/* 2.5 · The Lab (Ongoing) */}
      <section className={styles.labSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.labHeader}>
            <h2 className={styles.sectionHeading}>The Lab</h2>
            <p className={styles.sectionSub}>Active Research & Development // Ongoing Systems</p>
          </div>

          <div className={styles.labGrid}>
            {homeData.labProjects.map((project) => (
              <article key={project.id} className={styles.labCard} data-id={project.id.toUpperCase()}>
                <Link to={`/projects/${project.id}`} className={styles.cardOverlayLink} data-cursor-pointer="true" aria-label={`View ${project.name} lab project details`}>
                  <div className={styles.labScreenshot}>
                    <img src={project.screenshot} alt={project.name} />
                    <div className={styles.labOverlay}>
                      <span className={styles.statusBadge}>IN_DEVELOPMENT</span>
                    </div>
                  </div>
                  <div className={styles.labContent}>
                    <h3 className={styles.labName}>{project.name}</h3>
                    <p className={styles.labOneLiner}>{project.oneLiner}</p>
                    <p className={styles.labDesc}>{project.approach}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3 · Capability Grid */}
      <section className={styles.capSection}>
        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Capabilities
        </motion.h2>
        <div className={styles.capGrid}>
          {capabilityGrid.map((tile, i) => (
            <div key={i} className={styles.capTile} data-cursor-pointer="true">
              <span className={styles.capIcon}>{tile.icon}</span>
              <h4 className={styles.capTitle}>{tile.title}</h4>
              <p className={styles.capTools}>{tile.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · How I Work */}
      <section className={styles.processSection}>
        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Execution Process
        </motion.h2>
        <div className={styles.processGrid}>
          {howIWork.map((step, i) => (
            <div key={i} className={styles.processStep}>
              <FocusText>
                <span className={styles.stepNumber}>PHASE_{step.step}</span>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.description}</p>
              </FocusText>
            </div>
          ))}
        </div>
      </section>

      {/* 5 · Stack Strip */}
      <section className={styles.stackSection}>
        <Marquee gradient={false} speed={50}>
          {stackStrip.map((tool, i) => (
            <span key={i} className={styles.stackChip}>{tool}</span>
          ))}
        </Marquee>
      </section>

      {/* 6 · Collaboration CTA */}
      <section className={styles.collabSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FocusText>
            <h2 className={styles.collabTitle}>{collaboration.title}</h2>
            <p className={styles.collabText}>{collaboration.description}</p>
          </FocusText>
          <Link to={collaboration.ctaTo} className={styles.btnPrimary} data-cursor-pointer="true">{collaboration.ctaLabel}</Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;