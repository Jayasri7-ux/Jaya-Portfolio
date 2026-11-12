import React from 'react';

const Services = () => {
    const services = [
        {
            icon: "💻",
            title: "Full-Stack Development",
            description: "Building end-to-end web applications with seamless frontend and backend integration."
        },
        {
            icon: "🎨",
            title: "Frontend Development",
            description: "Creating responsive, interactive, and pixel-perfect user interfaces using React."
        },
        {
            icon: "⚙️",
            title: "Backend Integration",
            description: "Designing secure APIs and managing databases for robust data handling."
        },
        {
            icon: "🤖",
            title: "Scalable Architecture & AI",
            description: "Developing clean, maintainable, and intelligent applications for long-term growth."
        }
    ];

    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
