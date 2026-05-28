import React, { useEffect, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'GitHub' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) setActive('#' + sec.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? '94%' : '96%',
        maxWidth: 1100,
        zIndex: 9000,
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'rgba(5,5,8,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${scrolled ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 50,
        padding: '12px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 24,
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none',
          letterSpacing: '-0.5px',
        }}>GJ</a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hide-mobile">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '7px 16px',
                borderRadius: 20,
                textDecoration: 'none',
                fontFamily: 'var(--font-main)',
                fontSize: 14,
                fontWeight: 500,
                color: active === link.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                background: active === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
                border: active === link.href ? '1px solid rgba(0,212,255,0.25)' : '1px solid transparent',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                if (active !== link.href) {
                  e.target.style.color = '#fff';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (active !== link.href) {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="btn-primary hide-mobile" style={{ padding: '8px 20px', fontSize: 13 }}>
          <span>Hire Me ✨</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hide-desktop"
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 8,
            padding: '6px 10px',
            color: '#fff',
            cursor: 'none',
            fontSize: 18,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 90,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          zIndex: 8999,
          background: 'rgba(10,10,20,0.95)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: 20,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }} className="hide-desktop">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 20px',
                borderRadius: 12,
                textDecoration: 'none',
                color: active === link.href ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                background: active === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
                fontFamily: 'var(--font-main)',
                fontSize: 15,
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
