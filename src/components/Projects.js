import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Full-Stack Blogging Platform",
      description: "A multi-user platform where authors create, edit, and publish rich-media articles with secure role-based access control.",
      tech: ["Java", "PostgreSQL", "Thymeleaf", "JavaScript"],
      github: "https://github.com/shivamshete1036", 
      live: "http://ec2-43-205-138-201.ap-south-1.compute.amazonaws.com:8080/"
    },
    {
      title: "Hospital Management System",
      description: "Desktop-based application to manage patient records, appointments, and billing, implementing database connectivity for CRUD operations.",
      tech: ["Java", "SQL", "HTML", "CSS"],
      github: "https://github.com/shivamshete1036"
    },
    {
      title: "iPhone Sales Insights (ML)",
      description: "Data analysis and machine learning project using visualization and models to study iPhone sales trends and predict future patterns.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/shivamshete1036"
    },
    {
      title: "Interactive Chatbot App",
      description: "Web-based chatbot interface created with React and connected to a PostgreSQL backend for secure data storage.",
      tech: ["React.js", "PostgreSQL", "JavaScript", "CSS"],
      github: "https://github.com/shivamshete1036"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title"> Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <a href={project.github} target="_blank" rel="noreferrer" className="view-btn">
                    Source Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="view-btn live-btn">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;