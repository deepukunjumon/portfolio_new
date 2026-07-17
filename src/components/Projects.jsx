import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Cashlytics',
    featured: true,
    image: '/assets/img/cashlytics.png',
    desc: 'Personal finance tracker built end-to-end — a Laravel 12 REST API with a React 19 + TypeScript frontend.',
    highlights: [
      'Token auth with Laravel Sanctum, state management with Zustand',
      'Tailwind + shadcn/ui frontend, MySQL on AWS EC2',
      'Deployed on Vercel (frontend) and Railway (API)',
    ],
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'MySQL', 'AWS'],
    code: 'https://github.com/deepukunjumon/cashlytics_backend',
    demo: 'https://cashlytics.up.railway.app',
  },
  {
    title: 'Bakeshop Management System',
    image: '/assets/img/cafe.webp',
    desc: 'An end-to-end management solution for commercial bakeshops, featuring real-time inventory tracking and order management.',
    tags: ['Laravel', 'React', 'Material UI'],
    code: 'https://github.com/deepukunjumon/town_bakers',
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
    title: 'Library Management System',
    image: '/assets/img/library-management-system.webp',
    desc: 'Automated digital cataloging and transaction system for libraries with efficient record keeping.',
    tags: ['PHP', 'HTML/CSS', 'MySQL'],
    code: 'https://github.com/deepukunjumon/Library_Management',
  }
];

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    {project.demo && (
      <a href={project.demo} target="_blank" rel="noreferrer" className="project-link primary-link">
        <i className="fas fa-external-link-alt"></i> Live Demo
      </a>
    )}
    <a href={project.code} target="_blank" rel="noreferrer" className="project-link">
      <i className="fab fa-github"></i> Source
    </a>
  </div>
);

const Projects = () => {
  const featured = projectData.filter((project) => project.featured);
  const others = projectData.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Personal Projects</h2>
      </motion.div>

      {featured.map((project) => (
        <motion.div
          className="project-featured"
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="featured-image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-badge">Featured</span>
              {project.demo && (
                <span className="live-badge"><span className="live-dot"></span>Live</span>
              )}
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.desc}</p>
            {project.highlights && (
              <ul className="project-highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <ProjectLinks project={project} />
          </div>
        </motion.div>
      ))}

      <div className="projects-grid">
        {others.map((project, idx) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} loading="lazy" />
              {project.demo && (
                <span className="live-badge image-badge"><span className="live-dot"></span>Live</span>
              )}
            </div>

            <div className="project-card-content">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              <div className="project-card-footer">
                <ProjectLinks project={project} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
