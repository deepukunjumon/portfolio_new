import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
      setTheme('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      setTheme('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <>
      <Analytics />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Qualifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
