import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I am <span>Akshay Kumar</span></h1>
      <p>Software Engineer | Full-stack Developer | ML Enthusiast</p>
      <div className="social-links">
        <a href="https://github.com/akshaykumarhp" target="_blank" rel="noopener noreferrer">
          <img src="/githublogo.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/akshaykumarhp/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedinlogo.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://x.com/akshayhp11" target="_blank" rel="noopener noreferrer">
          <img src="/xlogo.avif" alt="X" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;