import React from 'react';
import pythonFullstack from '../assets/cert-python-fullstack.png';
import pythonFoundation from '../assets/cert-python-foundation.png';
import aiTools from '../assets/cert-ai-tools.jpg';
import uiUx from '../assets/cert-ui-ux.png';
import seAgile from '../assets/cert-se-agile.png';
import mongodb from '../assets/cert-mongodb.png';

const Certifications = () => {
    const certifications = [
        {
            title: "Python Full Stack Development",
            issuer: "SEED & Infosys Foundation (AspireNEXT)",
            achievement: "Successfully completed end-to-end training in Python full-stack web development through the AspireNEXT program.",
            image: pythonFullstack
        },
        {
            title: "Python Foundation Certification",
            issuer: "Infosys Springboard",
            achievement: "Earned certification in core Python programming, data structures, and algorithmic problem-solving.",
            image: pythonFoundation
        },
        {
            title: "MongoDB Essentials",
            issuer: "L&T EduTech (CollegeConnect Programme)",
            achievement: "Completed the MongoDB Essentials course with First Class (A+) distinction in NoSQL database design and management.",
            image: mongodb
        },
        {
            title: "UI and UX Developer",
            issuer: "L&T EduTech (CollegeConnect Programme)",
            achievement: "Completed the UI and UX Developer course with First Class (A) distinction, focusing on user-centric interface design.",
            image: uiUx
        },
        {
            title: "Software Engineering & Agile Development",
            issuer: "Infosys Springboard",
            achievement: "Completed training in Software Engineering principles, SDLC methodologies, and Agile development practices.",
            image: seAgile
        },
        {
            title: "AI Tools Skill Up",
            issuer: "GeeksforGeeks (Nation SkillUp)",
            achievement: "Successfully completed the AI Tools Skill Up course, applying modern AI tools for productivity and development.",
            image: aiTools
        }
    ];

    return (
        <section id="certifications" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-item-card">
                            <div className="certification-info">
                                <h3 className="achievement-title">{cert.title}</h3>
                                <p className="achievement-desc">{cert.issuer}</p>
                                <p className="certification-text">{cert.achievement}</p>
                            </div>
                            <div className="certification-side-img">
                                <a
                                    href={cert.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card"
                                >
                                    <img src={cert.image} alt={cert.title} className="exp-cert-img" />
                                    <span className="cert-caption">View Certificate</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
