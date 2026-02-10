import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            title: "Smart India Hackathon (SIH) '23 & '24 Grand Finale",
            description: "Participated as a finalist in the national level SIH Grand Finale for two consecutive years.",
            points: [
                "Gained valuable knowledge and hands-on experience in application development, problem-solving, and teamwork.",
                "Contributed to creating functional applications using modern technologies under a time-bound challenge."
            ],
            icon: "🏆"
        },
        {
            title: "District Level Youth Parliament",
            description: "Selected to deliver a speech at the district level youth parliament session.",
            points: [
                "Gained experience in public speaking, idea articulation, and audience engagement.",
                "Represented young voices in discussing local and national issues."
            ],
            icon: "🎙️"
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-content">
                                <h3 className="achievement-title">{item.title}</h3>
                                <p className="achievement-desc">{item.description}</p>
                                <ul className="achievement-points">
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
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

export default Achievements;
