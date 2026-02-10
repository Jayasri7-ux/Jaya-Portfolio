import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Fake News Detection & Media Integrity Analysis",
            description: "Machine learning-based system to identify fake or misleading news content.",
            tech: ["Python", "ML", "NLP"],
            link: "https://fake-news-detection-media-integrity.onrender.com"
        },
        {
            title: "YouTube Channel Performance & Engagement Analytics Dashboard",
            description: "Analytics dashboard to visualize channel growth and engagement metrics.",
            tech: ["React", "D3.js", "Node.js"],
            link: "#"
        },
        {
            title: "Robust Hydraulic Transient Analysis Model",
            description: "CFD-based simulation to analyze pressure surges in hydropower systems.",
            tech: ["C++", "Simulation"],
            link: "https://the-strivers.github.io/Hydra/"
        },
        {
            title: "Online Personalized Learning Remediation Tool",
            description: "Adaptive learning platform built with React, featuring real-time tracking and analytics.",
            tech: ["React", "Firebase"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
