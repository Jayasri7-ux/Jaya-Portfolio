import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('https://formsubmit.co/ajax/jayasripalli20@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`
                })
            });
            const result = await response.json();
            if (response.ok && result.success !== 'false') {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(result.message || 'Please check jayasripalli20@gmail.com to activate the form.');
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>I'm open to new opportunities and collaborations. Feel free to reach out!</p>

                        <div className="info-item">
                            <span className="label">Email:</span>
                            <a href="mailto:jayasripalli20@gmail.com">jayasripalli20@gmail.com</a>
                        </div>

                        <div className="info-item">
                            <span className="label">Phone:</span>
                            <a href="tel:+917893414784">+91 7893414784</a>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/jayasri-palli-ab15ab334" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                            <a href="https://github.com/Jayasri7-ux" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        {status && (
                            <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--primary-color)' }}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
