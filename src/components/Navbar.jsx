import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const handleMenuKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMenuToggle();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div
          className={`nav-links ${menuOpen ? 'active' : ''}`}
          aria-hidden={!menuOpen ? 'true' : undefined}
        >
          <a href="#hero" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#qualifications" className="nav-link" onClick={closeMenu}>Qualifications</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <div className="theme-toggle">
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === 'dark-mode'}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <label htmlFor="theme-toggle">
              <i className='light-icon'><Sun /></i>
              <i className='dark-icon'><Moon /></i>
            </label>
          </div>
        </div>
        <div
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
          onKeyDown={handleMenuKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;
