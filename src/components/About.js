import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate Full-Stack Developer with experience in modern web technologies.
                            I enjoy solving real-world problems through intuitive and efficient solutions.
                            My journey in tech is driven by a constant eagerness to learn, grow, and adapt to new challenges.
                        </p>
                    </div>

                    <div className="education-timeline">
                        <h3 className="timeline-title">Education</h3>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2022 - 2026</div>
                            <div className="timeline-content">
                                <h4>B.Tech in Information Technology</h4>
                                <p>Sri Venkateswara College of Engineering and Technology, JNTUA</p>
                                <span className="grade">GPA: 8.77</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2020 - 2022</div>
                            <div className="timeline-content">
                                <h4>Intermediate</h4>
                                <p>Sri Chaitanya College, Visakhapatnam</p>
                                <span className="grade">Percentage: 89%</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2019 - 2020</div>
                            <div className="timeline-content">
                                <h4>10th Grade</h4>
                                <p>Sri Rama Krishna English Medium School, Visakhapatnam</p>
                                <span className="grade">Percentage: 100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
