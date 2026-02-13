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

const Home = () => {
  const { hero, selectedWork, capabilityGrid, howIWork, stackStrip, collaboration } = homeData;

  return (
    <div className={styles.container}>

      {/* 1 · Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroPhoto}>
            <img src={profilePhoto} alt="Vaijayanth Sheri" className={styles.profileImg} />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.name}>{hero.name}</h1>
            <h2 className={styles.title}>{hero.title}</h2>
            <p className={styles.subheadline}>{hero.subheadline}</p>
            <div className={styles.heroCtas}>
              <Link to={hero.ctaPrimary.to} className={styles.btnPrimary}>{hero.ctaPrimary.label}</Link>
              <Link to={hero.ctaSecondary.to} className={styles.btnSecondary}>{hero.ctaSecondary.label}</Link>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider1} />

      {/* 2 · Selected Work (Swiper with arrows) */}
      <section className={styles.selectedWorkSection}>
        <h2 className={styles.sectionHeading}>Selected Work</h2>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            grabCursor={true}
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
                <article className={styles.projectCard}>
                  <div className={styles.projectScreenshot}>
                    <span className={styles.screenshotPlaceholder}>{project.screenshot}</span>
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
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn}>Demo</a>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.projectBtn}>Repo</a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.moreProjects}>
          <Link to="/projects" className={styles.moreLink}>More Projects →</Link>
        </div>
      </section>

      <hr className={styles.divider2} />

      {/* 3 · Capability Grid */}
      <section className={styles.capSection}>
        <h2 className={styles.sectionHeading}>What I Build</h2>
        <div className={styles.capGrid}>
          {capabilityGrid.map((tile, i) => (
            <div key={i} className={styles.capTile}>
              <span className={styles.capIcon}>{tile.icon}</span>
              <h4 className={styles.capTitle}>{tile.title}</h4>
              <p className={styles.capTools}>{tile.tools}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider3} />

      {/* 4 · How I Work */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionHeading}>How I Work</h2>
        <div className={styles.processGrid}>
          {howIWork.map((step, i) => (
            <div key={i} className={styles.processStep}>
              <span className={styles.stepNumber}>{step.step}</span>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider4} />

      {/* 5 · Stack Strip */}
      <section className={styles.stackSection}>
        <div className={styles.stackStrip}>
          {stackStrip.map((tool, i) => (
            <span key={i} className={styles.stackChip}>{tool}</span>
          ))}
        </div>
      </section>

      <hr className={styles.divider5} />

      {/* 6 · Collaboration CTA */}
      <section className={styles.collabSection}>
        <h2 className={styles.collabTitle}>{collaboration.title}</h2>
        <p className={styles.collabText}>{collaboration.description}</p>
        <Link to={collaboration.ctaTo} className={styles.btnPrimary}>{collaboration.ctaLabel}</Link>
      </section>

    </div>
  );
};

export default Home;