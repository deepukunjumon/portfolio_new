import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typed.js is loaded globally via CDN in index.html
    const options = {
      strings: ["Backend Developer", "Software Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    
    let typed;
    if (window.Typed) {
      typed = new window.Typed(typedRef.current, options);
    }
    
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src="/assets/img/pro-pic1.webp" alt="Deepu" loading="lazy" />
      </motion.div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1>Hi, I'm <span className="highlight">Deepu</span></h1>
        <p className="role"><span ref={typedRef} className="typed-text"></span></p>
        <p className="description">Backend Developer with experience in PHP, Laravel, and API development.
          Skilled in building efficient, scalable, and maintainable web applications.
          Driven by problem-solving and continuous learning.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn primary">Contact</a>
          <a href="https://drive.google.com/file/d/1wkN1cAZVoyhbN_HcjTk8qPYsmuZ71wTb/view?usp=drive_link"
            className="btn secondary" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/deepu-kunjumon" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/deepukunjumon" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-github"></i></a>
          <a href="mailto:deepukunjumon1@gmail.com" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-envelope"></i></a>
          <a href="https://wa.me/+918086952858" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/deepu__kunjumon" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
