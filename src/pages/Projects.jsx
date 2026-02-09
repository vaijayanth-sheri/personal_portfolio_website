import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import ProjectCard from '../components/core/ProjectCard';
import { projectsData } from '../data/projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from './Projects.module.css';

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          Exploring energy systems, data visualization, and sustainable tech through code.
        </p>
      </header>

      <div className={styles.controls}>
        <button
          className={styles.toggleButton}
          onClick={() => setViewAll(!viewAll)}
        >
          {viewAll ? 'Back to Slider' : 'View All Projects'}
        </button>
      </div>

      {viewAll ? (
        <div className={styles.gridContainer}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5, // Show part of side slides for context
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }}
            className={styles.swiper}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className={styles.swiperSlide}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Projects;