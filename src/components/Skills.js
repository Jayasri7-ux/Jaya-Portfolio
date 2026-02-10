import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Web Development",
            items: ["HTML", "CSS", "JavaScript", "React", "SQL"]
        },
        {
            category: "Programming Languages",
            items: ["C", "Python", "Java"]
        },
        {
            category: "Soft Skills",
            items: ["Communication", "Time Management", "Teamwork", "Leadership"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
