import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Jaya Sri Palli. All rights reserved.</p>
                <p className="tagline">Built with React & Modern Web Technologies</p>
            </div>
        </footer>
    );
};

export default Footer;
