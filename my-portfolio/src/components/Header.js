import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        {/* Wrap the logo in a Link component */}
        <Link to="/">
          <img src="/a.png" alt="Akshay Kumar Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work-exp">Work Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Get in touch</Link></li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;