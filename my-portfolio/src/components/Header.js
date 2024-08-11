import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img 
          src={require('../assets/images/a.png').default} 
          alt="Akshay Kumar Logo" 
          className={`logo ${isDarkMode ? 'dark-logo' : ''}`} 
        />
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
      <ThemeToggle setIsDarkMode={setIsDarkMode} />
    </header>
  );
}

export default Header;