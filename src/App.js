import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [modalCert, setModalCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAppClick = (e) => {
    const certLink = e.target.closest('.cert-card');
    if (certLink) {
      e.preventDefault();
      const img = certLink.querySelector('img');
      const caption = certLink.querySelector('.cert-caption');
      setModalCert({
        src: certLink.getAttribute('href') || (img && img.src),
        title: (img && img.alt) || (caption && caption.textContent) || 'Certificate'
      });
    }
  };

  return (
    <div className="App" onClick={handleAppClick}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Services />
      <Contact />
      <Footer />

      {modalCert && (
        <div className="cert-modal-overlay" onClick={() => setModalCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setModalCert(null)}
              aria-label="Close certificate preview"
            >
              &times;
            </button>
            <img src={modalCert.src} alt={modalCert.title} className="cert-modal-img" />
            <div className="cert-modal-footer">
              <span className="cert-modal-title">{modalCert.title}</span>
              <a
                href={modalCert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline cert-modal-open-btn"
              >
                Open Full Image ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
