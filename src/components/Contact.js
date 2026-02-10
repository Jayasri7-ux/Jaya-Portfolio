import React from 'react';

const Contact = () => {
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
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
