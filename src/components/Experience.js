import React from 'react';
import infosysCert from '../assets/infosys-internship.png';
import lntCert from '../assets/lnt-internship.png';
import internpeCert from '../assets/internpe-internship.png';

const Experience = () => {
    const experiences = [
        {
            role: "Python Intern",
            company: "Infosys Springboard (Virtual Internship)",
            date: "February 2026 – March 2026",
            details: [
                "Developed a YouTube Analytics Dashboard using Python and Pandas to analyze video performance and automate reporting.",
                "Processed and analyzed 1,000+ records, tracking 9 KPIs to identify content performance trends and generate actionable insights.",
                "Created data summaries and visual reports to simplify YouTube channel performance analysis."
            ],
            certificate: {
                label: "Infosys Certificate",
                image: infosysCert
            }
        },
        {
            role: "Full Stack Developer Intern",
            company: "Larsen & Toubro , (Chennai)",
            date: "July 2025 – December 2025",
            details: [
                "Developed a full-stack audit application using React.js and Django.",
                "Implemented secure data flow and authentication mechanisms.",
                "Gained hands-on experience in building scalable, real-world applications.",
                "Collaborated with senior developers to optimize application performance."
            ],
            certificate: {
                label: "L&T Certificate",
                image: lntCert
            }
        },
        {
            role: "Data Science & Machine Learning Intern",
            company: "AICTE (Data Valley)",
            date: "June 2024 – July 2024",
            details: [
                "Executed end-to-end data preprocessing, analysis, and visualization utilizing Python libraries including Pandas, NumPy, and Matplotlib.",
                "Developed and trained machine learning models, applying algorithms for regression, classification, and clustering.",
                "Evaluated model performance using accuracy, precision, and recall metrics to enhance predictive outcomes."
            ]
        },
        {
            role: "Python Development Intern",
            company: "InternPe",
            date: "May 2024 – June2024",
            details: [
                "Created multiple small-scale Python projects, showcasing problem-solving and programming skills.",
                "Used Python libraries such as Pandas, NumPy, and Matplotlib for data processing and visualization.",
                "Implemented logic-driven solutions for automation and data analysis tasks."
            ],
            certificate: {
                label: "InternPe Certificate",
                image: internpeCert
            }
        }
    ];

    return (
        <section id="experience" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-cards">
                    {experiences.map((exp, index) => (
                        <div key={index} className="exp-card">
                            <div className="exp-left">
                                <span className="exp-date">{exp.date}</span>
                                <div className="exp-company">{exp.company}</div>
                            </div>
                            <div className={exp.certificate ? "exp-right exp-right-with-cert" : "exp-right"}>
                                <div className="exp-info">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <ul className="exp-details">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                                {exp.certificate && (
                                    <div className="exp-cert-side">
                                        <a
                                            href={exp.certificate.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-card"
                                        >
                                            <img
                                                src={exp.certificate.image}
                                                alt={exp.certificate.label}
                                                className="exp-cert-img"
                                            />
                                            <span className="cert-caption">{exp.certificate.label}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
