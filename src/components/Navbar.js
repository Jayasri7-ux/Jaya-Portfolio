import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo">Jaya.</a>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    <li><a href="/assets/resume.pdf" download className="btn-resume">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
