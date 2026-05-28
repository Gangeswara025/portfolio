import React, { useState, useEffect } from 'react';
import IntroSequence from './components/IntroSequence';
import CinematicEnvironment from './components/CinematicEnvironment';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Github from './components/Github';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer style={{
      padding: '60px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.02)',
      background: 'transparent',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, marginBottom: 12, color: 'var(--text-muted)', letterSpacing: 2 }}>
        G J J . C O R E
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--font-mono)', marginBottom: 20, letterSpacing: 4 }}>
        SYSTEM OFFLINE / END OF TRANSMISSION
      </p>
    </footer>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  // Scroll reveal
  useEffect(() => {
    if (!introComplete) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [introComplete]);

  return (
    <div style={{ background: '#020202', minHeight: '100vh', color: '#fff' }}>
      {!introComplete && <IntroSequence onComplete={() => setIntroComplete(true)} />}
      
      {/* 3D Global Environment is always mounted to compile shaders, but hidden initially to prevent pop-in during glitch */}
      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 2s ease-in' }}>
        <CinematicEnvironment />
      </div>

      <CustomCursor />

      <div style={{
        opacity: introComplete ? 1 : 0,
        transition: 'opacity 2s ease-in 0.5s',
        position: 'relative',
        zIndex: 10, // Must be above the fixed 3D canvas
      }}>
        <Navbar />
        <Hero />
        <Journey />
        <Projects />
        <Skills />
        <Github />
        <Achievements />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
