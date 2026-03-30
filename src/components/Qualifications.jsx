import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="qualifications" className="qualifications">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Qualifications
      </motion.h2>

      <div className="qualification-tabs">
        <div 
          className={`qualification-button ${activeTab === 'education' ? 'button-active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </div>
        <div 
          className={`qualification-button ${activeTab === 'experience' ? 'button-active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          <i className="fas fa-briefcase"></i> Experience
        </div>
      </div>

      <div className="qualification-sections">
        {activeTab === 'education' && (
          <div 
            key="education"
            className="qualification-content qualification-active"
          >
            <div className="qualification-data">
              <div className="left animate">
                <h3>Master of Computer Applications</h3>
                <span className="qualification-subtitle">Kerala Technological University (KTU)</span>
                <div className="calendar">
                  <i className="fas fa-calendar-alt"></i> 2021 - 2023
                </div>
                <p>CGPA: 7.81</p>
              </div>
              <div className="center">
                <span className="dot"></span>
                <span className="line"></span>
              </div>
              <div></div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div className="center">
                <span className="dot"></span>
                <span className="line"></span>
              </div>
              <div className="right animate">
                <h3>Bachelor of Computer Applications</h3>
                <span className="qualification-subtitle">Mahatma Gandhi University (MGU)</span>
                <div className="calendar">
                  <i className="fas fa-calendar-alt"></i> 2017 - 2020
                </div>
                <p>CCPA: 5.73</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div 
            key="experience"
            className="qualification-content qualification-active"
          >
            <div className="qualification-data">
              <div className="left animate">
                <h3>PHP Developer</h3>
                <span className="qualification-subtitle">Acumen Capital Market India Ltd.</span>
                <div className="calendar">
                  <i className="fas fa-calendar-alt"></i> Nov 2023 - Present
                </div>
              </div>
              <div className="center">
                <span className="dot"></span>
                <span className="line"></span>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;
