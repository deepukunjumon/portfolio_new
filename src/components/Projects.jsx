import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Bakeshop Management System',
    image: '/assets/img/cafe.webp',
    desc: 'A custom software built using Laravel, react and material UI frontend which manages the activities in a bakeshop',
    code: 'https://github.com/deepukunjumon/townbakers',
    demo: 'https://townbakers.vercel.app',
  },
  {
    title: 'Traffic Sign Recognition System',
    image: '/assets/img/traffic-sign-recognition.webp',
    desc: 'This Python-based machine learning project leverages computer vision techniques to detect and recognize traffic signboards in real-time. Using pre-trained models, it accurately identifies various traffic signs and provides voice output, helping to enhance driver assistance systems or automated vehicles.',
    code: 'https://github.com/deepukunjumon/Real-Time-Traffic-Sign-Recognition-with-Voice-Alert',
  },
  {
    title: 'Course Selection System',
    image: '/assets/img/course-selection-system.webp',
    desc: 'A web-based system that allows students to select courses for their program. It helps students view available courses and check prerequisites. Administrators can manage courses and track student selections easily.',
    code: 'https://github.com/deepukunjumon/',
  },
  {
    title: 'Library Management System',
    image: '/assets/img/library-management-system.webp',
    desc: 'A simple web application built using php, to manage the activiteies in a library.',
    code: 'https://github.com/deepukunjumon/Library_Management',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-container">
        <div className="projects-scroll">
          {projectData.map((project, idx) => (
            <motion.div 
              className="project" 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-info">{project.title}</div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.code} target="_blank" rel="noreferrer" className="btn">Source Code</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-success">Demo</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
