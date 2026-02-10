import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Fake News Detection & Media Integrity Analysis",
            problem: "Detecting misinformation and deepfakes in real-time to preserve digital trust.",
            tech: ["Python", "ML", "NLP", "Streamlit"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux",
            demo: "https://fake-news-detection-media-integrity.onrender.com"
        },
        {
            title: "YouTube Channel Performance & Analytics",
            problem: "Helping creators understand audience engagement through automated data visualization.",
            tech: ["React", "D3.js", "Python API"],
            status: "In Progress",
            github: "https://github.com/Jayasri7-ux",
            demo: "#"
        },
        {
            title: "Hydraulic Transient Analysis Model",
            problem: "Simulating pressure surges in complex piping systems to prevent infrastructure failure.",
            tech: ["C++", "Simulation", "Numerical Methods"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux",
            demo: "#"
        },
        {
            title: "Online Personalized Learning Tool",
            problem: "Bridging educational gaps by adapting content to individual student progress.",
            tech: ["React", "Firebase", "Real-time Analytics"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-status-tag">{project.status}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-problem">
                                <strong>Problem:</strong> {project.problem}
                            </div>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-action-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                                        🔗 GitHub
                                    </a>
                                )}
                                {project.demo && project.demo !== "#" && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-link">
                                        🌐 Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
