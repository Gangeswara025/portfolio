import React from 'react';

const focuses = [
  { icon: '🌐', label: 'Full Stack Development', color: '#00d4ff' },
  { icon: '🤖', label: 'AI Integration', color: '#7c3aed' },
  { icon: '⚙️', label: 'Backend Engineering', color: '#00ff88' },
  { icon: '🧠', label: 'Machine Learning', color: '#ffd700' },
  { icon: '🔍', label: 'Problem Solving', color: '#ff006e' },
  { icon: '⚡', label: 'Hackathons', color: '#00d4ff' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 20px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06), transparent)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-tag">◈ The Human Behind The Code</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="responsive-grid" style={{ alignItems: 'center' }}>
          {/* Left: Text */}
          <div className="reveal">
            <p style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'var(--text-secondary)',
              lineHeight: 2,
              marginBottom: 32,
            }}>
              I am <span style={{ color: '#fff', fontWeight: 700 }}>Gangeswara J J</span>, a final-year AIML student and Full Stack Developer passionate about building{' '}
              <span className="gradient-text-cyan" style={{ fontWeight: 600 }}>AI-powered applications</span> and backend systems.
            </p>
            <p style={{
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: 'var(--text-muted)',
              lineHeight: 2,
              marginBottom: 40,
            }}>
              I enjoy turning ideas into real products and participating in projects and hackathons that solve practical problems. My approach combines engineering precision with creative problem-solving to build things that matter.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📍', label: 'India' },
                { icon: '🎓', label: 'Final Year AIML Student' },
                { icon: '💼', label: 'Open to Full-time Opportunities' },
                { icon: '📧', label: 'jjgangeswara@gmail.com' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span>{item.icon}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 15 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Focus Areas + Avatar */}
          <div className="reveal">
            {/* Avatar placeholder */}
            <div style={{
              width: 180, height: 180,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))',
              border: '2px solid rgba(0,212,255,0.3)',
              margin: '0 auto 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 64,
              boxShadow: '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(124,58,237,0.1)',
              animation: 'float-slow 6s ease-in-out infinite',
            }}>
              👨‍💻
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              marginBottom: 24,
              letterSpacing: 1,
            }}>FOCUS AREAS</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {focuses.map(f => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '9px 18px',
                    borderRadius: 20,
                    background: `${f.color}10`,
                    border: `1px solid ${f.color}30`,
                    fontSize: 14,
                    color: f.color,
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${f.color}22`;
                    e.currentTarget.style.borderColor = f.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${f.color}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${f.color}10`;
                    e.currentTarget.style.borderColor = `${f.color}30`;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{f.icon}</span>
                  <span style={{ fontWeight: 500 }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
