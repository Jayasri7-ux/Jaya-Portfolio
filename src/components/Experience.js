import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-container">
                    <div className="experience-card">
                        <div className="exp-header">
                            <h3 className="exp-role">Full Stack Developer Intern</h3>
                            <span className="exp-company">L&T</span>
                            <span className="exp-date">July 2025 – December 2025</span>
                        </div>
                        <ul className="exp-details">
                            <li>Developed a full-stack audit application using React.js and Django.</li>
                            <li>Implemented secure data flow and authentication mechanisms.</li>
                            <li>Gained hands-on experience in building scalable, real-world applications.</li>
                            <li>Collaborated with senior developers to optimize application performance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
