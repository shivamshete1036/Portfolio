import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Intelligent Prescription Scanner",
      description: "An AI-powered system using OCR and NLP to scan and process doctor's prescriptions into digital data for easier medical record management.",
      tech: ["React", "Python", "OCR", "NLP"],
      link: "https://github.com/shivamshete1036/Portfolio" 
    },
    {
      title: "Java Automation Tool",
      description: "A backend tool designed to automate repetitive tasks and streamline workflows using Java-based frameworks.",
      tech: ["Java", "Selenium", "Maven"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal branding site built to showcase technical projects and frontend proficiency.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://github.com/shivamshete1036/Portfolio"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;