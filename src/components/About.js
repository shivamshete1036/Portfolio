import React from 'react';
import './About.css';

const About = () => {
  const skills = ['Java', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Problem Solving'];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate Developer with a strong foundation in <strong>Java</strong> and 
            Modern Web Technologies. Currently, I am focusing on building intelligent 
            systems, specifically working on <strong>OCR and NLP</strong> solutions for 
            medical prescriptions.
          </p>
          
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;