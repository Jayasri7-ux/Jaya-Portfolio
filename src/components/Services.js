import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Building end-to-end web applications with seamless frontend and backend integration."
        },
        {
            title: "Frontend Development",
            description: "Creating responsive, interactive, and pixel-perfect user interfaces using React."
        },
        {
            title: "Backend Integration",
            description: "Designing secure APIs and managing databases for robust data handling."
        },
        {
            title: "Scalable Architecture",
            description: "Developing clean, maintainable, and scalable codebases for long-term growth."
        }
    ];

    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
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
