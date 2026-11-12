import React from 'react';
import sih2023 from '../assets/sih-2023.png';
import sih2024 from '../assets/sih-2024.png';
import youthParliamentCert from '../assets/youth-parliament.png';

const Achievements = () => {
    const achievements = [
        {
            title: "Smart India Hackathon (SIH) '23 & '24 Grand Finale",
            description: "Participated as a finalist in the national level SIH Grand Finale for two consecutive years.",
            points: [
                "Gained valuable knowledge and hands-on experience in application development, problem-solving, and teamwork.",
                "Contributed to creating functional applications using modern technologies under a time-bound challenge."
            ],
            icon: "🏆",
            certificates: [
                { label: "SIH 2023 Grand Finale", image: sih2023 },
                { label: "SIH 2024 Grand Finale", image: sih2024 }
            ]
        },
        {
            title: "District Level Youth Parliament",
            description: "Selected to deliver a speech at the district level youth parliament session.",
            points: [
                "Gained experience in public speaking, idea articulation, and audience engagement.",
                "Represented young voices in discussing local and national issues."
            ],
            icon: "🎙️",
            certificates: [
                { label: "Viksit Bharat Youth Parliament 2025", image: youthParliamentCert }
            ]
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
                                {item.certificates && (
                                    <div className="achievement-certificates">
                                        {item.certificates.map((cert, idx) => (
                                            <a
                                                key={idx}
                                                href={cert.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cert-card"
                                            >
                                                <img src={cert.image} alt={cert.label} className="cert-img" />
                                                <span className="cert-caption">{cert.label}</span>
                                            </a>
                                        ))}
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

export default Achievements;
