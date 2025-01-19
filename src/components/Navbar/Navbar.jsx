import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="/image/logo.png" alt="Logo" width={60} height={60} />
          </NavLink>
        </div>

        {/* Навигационные ссылки */}
        <div className="navbar-links">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/skills" className="nav-item">
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
          <NavLink to="/education" className="nav-item">
            Education
          </NavLink>
          <NavLink to="/resume" className="nav-item">
            Resume
          </NavLink>
        </div>

        {/* Переключатель темы */}
        <div className="navbar-toggle">
          <label className="theme-switch">
            <input type="checkbox" />
            <span className="theme-switch-slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
