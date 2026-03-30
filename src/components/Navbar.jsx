import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
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
            />
            <label htmlFor="theme-toggle">
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </label>
          </div>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
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
