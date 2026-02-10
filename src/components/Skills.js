import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            items: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            category: "Backend / Data",
            items: ["Python", "SQL", "APIs"]
        },
        {
            category: "ML / Analytics",
            items: ["Machine Learning", "Data Analysis", "Streamlit"]
        },
        {
            category: "Tools",
            items: ["Git", "GitHub", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Skills & Tools</h2>
                <div className="skills-container">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-group-card">
                            <h3 className="skill-group-title">{group.category}</h3>
                            <div className="skill-badge-container">
                                {group.items.map((skill, idx) => (
                                    <div key={idx} className="skill-badge">
                                        {skill}
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
