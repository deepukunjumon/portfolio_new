import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Bakeshop Management System',
    image: '/assets/img/cafe.webp',
    desc: 'An end-to-end management solution for commercial bakeshops, featuring real-time inventory tracking and order management.',
    tags: ['Laravel', 'React', 'Material UI'],
    code: 'https://github.com/deepukunjumon/townbakers',
    demo: 'https://townbakers.vercel.app',
  },
  {
    title: 'Traffic Sign Recognition',
    image: '/assets/img/traffic-sign-recognition.webp',
    desc: 'Real-time computer vision system using Python and deep learning to identify traffic signs with integrated voice alerts.',
    tags: ['Python', 'Machine Learning', 'OpenCV'],
    code: 'https://github.com/deepukunjumon/Real-Time-Traffic-Sign-Recognition-with-Voice-Alert',
  },
  {
    title: 'Course Selection System',
    image: '/assets/img/course-selection-system.webp',
    desc: 'A comprehensive web platform for students to navigate course prerequisites and manage academic enrollments.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    code: 'https://github.com/deepukunjumon/',
  },
  {
    title: 'Library Management System',
    image: '/assets/img/library-management-system.webp',
    desc: 'Automated digital cataloging and transaction system for libraries with efficient record keeping.',
    tags: ['PHP', 'HTML/CSS', 'MySQL'],
    code: 'https://github.com/deepukunjumon/Library_Management',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Featured Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <motion.div 
            className="project-card" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card-overlay">
                <a href={project.code} target="_blank" rel="noreferrer" className="overlay-link"><i className="fab fa-github"></i> Source</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-link"><i className="fas fa-external-link-alt"></i> Demo</a>
                )}
              </div>
            </div>
            
            <div className="project-card-content">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              <div className="project-card-footer">
                <a href={project.code} target="_blank" rel="noreferrer" className="project-cta">
                  Explore Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
