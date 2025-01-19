import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/"><img src="/image/logo.png" alt="Logo" width={60} height={60}/></NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className="nav-item" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/skills" className="nav-item" activeClassName="active">
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-item" activeClassName="active">
            Projects
          </NavLink>
          <NavLink to="/education" className="nav-item" activeClassName="active">
            Education
          </NavLink>
          <NavLink to="/resume" className="nav-item" activeClassName="active">
            Resume
          </NavLink>
        </div>
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
