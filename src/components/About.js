import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Java', 'Python', 'JavaScript', 
    'SpringBoot', 'React.js', 'Node.js', 
    'Express.js', 'Pandas & NumPy', 
    'HTML & CSS', 'mySQL', 'PostgreSQL', 'Git & GitHub'
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Professional Profile</h2>
        
        <div className="about-grid">
          {/* Detailed Bio Section */}
          <div className="bio-container">
            <p className="bio-para">
              I am an <span className="text-highlight">Aspiring Software Developer</span> with a specialized focus on building 
              intelligent systems and full-stack solutions. Currently, I am completing my 
              <span className="text-highlight">B.E. in Computer Science</span> at Jawaharlal Darda Institute of Engineering 
              and Technology, maintaining a <span className="text-highlight">71.42% score</span> through my 7th semester.
            </p>
            <p className="bio-para">
              My professional foundation includes a <span className="text-highlight">Frontend Development Internship</span> at TechieHelp, 
              where I engineered responsive web pages and interactive components. I am dedicated to 
              clean code practices, effective debugging, and team-centric collaboration.
            </p>
          </div>

          {/* Educational Timeline / Quick Facts */}
          <div className="education-sidebar">
             <div className="edu-item">
                <span className="edu-label">Expected Graduation</span>
                <span className="edu-value">2026</span>
             </div>
             <div className="edu-item">
                <span className="edu-label">Current Focus</span>
                <span className="edu-value">Full Stack Java</span>
             </div>
          </div>
        </div>
          
        <h3 className="skills-subheading">Technical Stack</h3>
        <div className="skills-flex">
          {skills.map((skill, index) => (
            <div key={index} className="skill-chip">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;