import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = ({ setIsDarkMode }) => {
  const [isDarkMode, setLocalDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      setLocalDarkMode(true);
      setIsDarkMode(true);
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setLocalDarkMode(false);
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setLocalDarkMode(true);
      setIsDarkMode(true);
    }
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </div>
  );
};

export default ThemeToggle;