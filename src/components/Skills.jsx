import React from 'react';
import { motion } from 'framer-motion';

const skillData = [
  { name: 'PHP', percentage: 82 },
  { name: 'Slim Framework', percentage: 80 },
  { name: 'Laravel', percentage: 70 },
  { name: 'API Development', percentage: 83 },
  { name: 'MySQL', percentage: 79 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="skills-content-wrapper">
          <div className="skills-content">
            <div className="skills-container">
              {skillData.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                    >
                      <div className="progress-circle"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            className="skills-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/img/dev-coding.gif" alt="Skills illustration" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
