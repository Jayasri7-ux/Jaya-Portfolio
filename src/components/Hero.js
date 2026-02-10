import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="hero-name">Jaya Sri Palli</h1>
                    <h2 className="hero-title">Full-Stack Developer</h2>
                    <p className="hero-description">
                        I craft clean, scalable, and intuitive web solutions. Passionate about solving real-world problems through modern technology.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                        <a href="/assets/resume.pdf" download className="btn btn-outline">Resume</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="image-blob">
                        <img
                            src={profileImg}
                            alt="Jaya Sri Palli"
                            className="profile-img"
                            onError={(e) => {
                                e.target.src = "https://ui-avatars.com/api/?name=Jaya+Sri+Palli&background=6C63FF&color=fff&size=400";
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
