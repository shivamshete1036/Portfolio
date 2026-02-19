import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg'; // Import your photo

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Profile Photo Side */}
        <div className="hero-image">
          <img src={profileImg} alt="Shivam Shete" className="profile-photo" />
        </div>

        {/* Text Content Side */}
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Shivam Shete</span></h1>
          <p>I build modern, responsive web applications using React and Java.</p>
          
          <div className="hero-btns">
            <a href="#projects" className="hero-btn">View My Work</a>
            <a 
              href="/Shivam_Shete_Resume.pdf" 
              download 
              className="hero-btn outline"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;