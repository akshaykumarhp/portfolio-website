import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="logo">Logo</div>
      <h1>Hi, I am <span>Akshay Kumar</span></h1>
      <p>Software Engineer | Full-stack Developer | ML Enthusiast</p>
      <div className="social-links">
        <a href="https://github.com/akshaykumarhp" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/akshaykumarhp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/akshaykumarhp" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/akshayhp11" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </div>
  );
}

export default Home;