import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src="/assets/img/pro-pic1.webp" alt="Deepu" loading="lazy" />
      </motion.div>
      <motion.div 
        className="hero-content"
        initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
          {[
            { href: "https://www.linkedin.com/in/deepu-kunjumon", icon: "fab fa-linkedin-in" },
            { href: "https://github.com/deepukunjumon", icon: "fab fa-github" },
            { href: "mailto:deepukunjumon1@gmail.com", icon: "fas fa-envelope" },
            { href: "https://wa.me/+918086952858", icon: "fab fa-whatsapp" },
            { href: "https://www.instagram.com/deepu__kunjumon", icon: "fab fa-instagram" }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              initial={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(0, 195, 154, 0))" }}
              animate={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(0, 195, 154, 0))" }}
              whileHover={{ 
                scale: 1.2, 
                filter: "drop-shadow(0px 0px 8px rgba(0, 195, 154, 0.8))"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
