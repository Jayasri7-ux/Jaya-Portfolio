import React, { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            title: "Fake News Detection & Media Integrity Analysis",
            category: "AI / ML & Data",
            problem: "Detecting misinformation and deepfakes in real-time to preserve digital trust.",
            solution: "Built an NLP and Machine Learning pipeline with a Flask web interface that classifies news articles and evaluates media authenticity in real time.",
            tech: ["Python", "Flask", "Scikit-learn", "NLP", "TF-IDF", "HTML/CSS"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/fake-news-detection-media-integrity",
            demo: "https://fake-news-detection-media-integrity.onrender.com"
        },
        {
            title: "YouTube Channel Performance & Analytics",
            category: "AI / ML & Data",
            problem: "Helping creators understand audience engagement through automated data visualization.",
            solution: "Developed an interactive analytics dashboard that processes 1,000+ channel records and tracks 9 key KPIs to automate reporting and surface content performance trends.",
            tech: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly / Matplotlib", "SQLite / MySQL"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/youtube-analytics-dashboard",
            demo: "https://youtube-analytics-dashboard-5cbrjrvg42efaiufsf8sbr.streamlit.app/"
        },
        {
            title: "Hydraulic Transient Analysis Model",
            category: "Core / Simulation",
            problem: "Simulating pressure surges in complex piping systems to prevent infrastructure failure.",
            solution: "Engineered a numerical simulation model to compute transient pressure waves and water hammer effects across pipeline networks for safe system design.",
            tech: ["C++", "Simulation", "Numerical Methods", "Hydraulic Modeling", "Data Visualization"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/hydra-project",
            demo: "#"
        },
        {
            title: "Online Personalized Learning Tool",
            category: "Full-Stack",
            problem: "Bridging educational gaps by adapting content to individual student progress.",
            solution: "Created a responsive learning platform with real-time progress tracking and adaptive content recommendations tailored to each learner's pace.",
            tech: ["React", "JavaScript", "Firebase", "Real-time Analytics", "HTML/CSS"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux",
            demo: "#"
        },
        {
            title: "Task Management System",
            category: "Full-Stack",
            problem: "Managing tasks efficiently with proper tracking, status updates, and secure access for multiple users.",
            solution: "Built a full-stack task management web app with JWT authentication, role-based workflows, and real-time status tracking for seamless team productivity.",
            tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/taskflow-pro",
            demo: "https://taskflow-pro-coral.vercel.app"

        },
        {
            title: "ResumeFitAI",
            category: "AI / ML & Data",
            problem: "Manually cross-referencing every job description keyword against your resume, rewriting bullet points, and formatting layouts takes hours of tedious, repetitive effort.",
            solution: "Automated the entire workflow into a seamless, side-by-side workspace that instantly analyzes JDs, filters keywords, and generates fact-checked tailored resumes.",
            tech: ["React", "Vite", "Local Ollama (llama3.2)", "JavaScript", "Tailwind CSS"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/resume-builder",
            demo: "https://resume-builder-livid-five.vercel.app/"
        },
        {
            title: "AI Health Chatbot",
            category: "AI / ML & Data",
            problem: "Patients and users often struggle to find immediate, structured symptom-related guidance online without sifting through complex medical articles or waiting for basic consultations.",
            solution: "Developed an interactive, NLP-driven web chatbot that processes user symptom queries and delivers structured, relevant health information instantly.",
            tech: ["Python", "Django", "NLTK", "NLP", "HTML/CSS"],
            status: "Completed",
            github: "https://github.com/Jayasri7-ux/AI_Medical_Chatbot",
            demo: "#"
        }
    ];

    const filters = ['All', 'Full-Stack', 'AI / ML & Data', 'Core / Simulation'];
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-status-tag">{project.status}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-problem">
                                <strong>Problem:</strong> {project.problem}
                                {project.solution && (
                                    <>
                                        <br /><br />
                                        <strong>Solution:</strong> {project.solution}
                                    </>
                                )}
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
                                {project.backend && (
                                    <a href={project.backend} target="_blank" rel="noopener noreferrer" className="proj-link">
                                        ⚙️ Backend API
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
