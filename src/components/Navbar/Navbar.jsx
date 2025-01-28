import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="/image/logo.png" alt="Logo" width={60} height={60} />
          </NavLink>
        </div>

        {/* Кнопка для мобильного меню */}
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Навигационные ссылки */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/skills" className="nav-item" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-item" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/education" className="nav-item" onClick={() => setMenuOpen(false)}>
            Education
          </NavLink>
          <NavLink to="/resume" className="nav-item" onClick={() => setMenuOpen(false)}>
            Resume
          </NavLink>
        </div>

        {/* Переключатель темы */}
        {/* <div className="navbar-toggle">
          <label className="theme-switch">
            <input type="checkbox" />
            <span className="theme-switch-slider"></span>
          </label>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
