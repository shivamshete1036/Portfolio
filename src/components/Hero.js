import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
       
        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Shivam B. Shete" className="profile-photo" />
        </div>

        
        <div className="hero-content">
          <span className="hero-label">Software Developer</span>
          <h1>
            Hi, I'm <span className="text-highlight">Shivam B. Shete</span>
          </h1>
          <p className="hero-description">
            Aspiring Software Developer with strong skills in Java, Python, and JavaScript, 
            focused on building responsive web applications and full-stack solutions.
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="hero-btn">View Work</a>
            <a 
              href="/Shivam_Shete_CSE_2026_Resume.pdf" 
              download 
              className="hero-btn outline"
            >
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;