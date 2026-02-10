import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "L&T",
            date: "July 2025 – December 2025",
            details: [
                "Developed a full-stack audit application using React.js and Django.",
                "Implemented secure data flow and authentication mechanisms.",
                "Gained hands-on experience in building scalable, real-world applications.",
                "Collaborated with senior developers to optimize application performance."
            ]
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
            ]
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
                            <div className="exp-right">
                                <h3 className="exp-role">{exp.role}</h3>
                                <ul className="exp-details">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
