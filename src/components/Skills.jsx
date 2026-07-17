import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const skillData = [
  {
    group: 'Backend',
    skills: ['PHP', 'Laravel', 'Slim Framework', 'REST APIs', 'MySQL'],
  },
  {
    group: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React.js'],
  },
  {
    group: 'Tools',
    skills: ['Git', 'Postman'],
  },
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
              {skillData.map((group, index) => (
                <motion.div
                  className="skill-group"
                  key={group.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h3 className="skill-group-title">{group.group}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            <motion.div
              className="skills-image"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DotLottieReact
                src="/assets/img/code_dark.json"
                loop
                autoplay
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
