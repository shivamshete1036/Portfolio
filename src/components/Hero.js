import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Shivam Shete</span></h1>
        <p>I build modern, responsive web applications.</p>
        <button className="hero-btn"> My Work</button>
      </div>
    </section>
  );
}

export default Hero;