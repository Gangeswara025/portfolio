import React, { useState } from 'react';

const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'Java SE 17 Certified',
    subtitle: 'Oracle Java Certification',
    desc: 'Achieved Java SE 17 certification demonstrating core Java, OOP, and modern Java features proficiency.',
    color: '#f89820',
    tag: 'Certification',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Hackathon Participant',
    subtitle: 'EV Log Challenge',
    desc: 'Competed in EV-focused hackathon, building a real-time EV logging and analytics solution within 24 hours.',
    color: '#00d4ff',
    tag: 'Hackathon',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI Projects Builder',
    subtitle: 'Production AI Apps',
    desc: 'Built and deployed multiple AI-powered applications including Resume Optimizer and Voice Detection API.',
    color: '#7c3aed',
    tag: 'AI Development',
  },
  {
    id: 4,
    icon: '📊',
    title: 'DSA Journey',
    subtitle: "Striver's Sheet",
    desc: 'Consistently solving DSA problems daily on Striver\'s 450-problem sheet to sharpen problem-solving skills.',
    color: '#00ff88',
    tag: 'Problem Solving',
  },
  {
    id: 5,
    icon: '🌐',
    title: 'Full Stack Developer',
    subtitle: 'End-to-End Apps',
    desc: 'Built complete full-stack applications from UI design to backend APIs, deployment, and database management.',
    color: '#ff006e',
    tag: 'Full Stack',
  },
  {
    id: 6,
    icon: '🔗',
    title: 'LinkedIn Showcase',
    subtitle: 'Project Featured',
    desc: 'Projects and achievements showcased on LinkedIn with positive engagement from the tech community.',
    color: '#0077b5',
    tag: 'Recognition',
  },
];

export default function Achievements() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section id="achievements" style={{ padding: '120px 20px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-header reveal">
          <div className="section-tag">◈ Vault</div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Holographic achievement cards — click to reveal details</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {achievements.map((a, i) => (
            <div
              key={a.id}
              onClick={() => setFlipped(flipped === a.id ? null : a.id)}
              style={{
                height: 220,
                perspective: '1000px',
                cursor: 'none',
                animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                transform: flipped === a.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* Front */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  padding: '28px',
                  background: `radial-gradient(circle at 20% 20%, ${a.color}15, rgba(10,10,20,0.9))`,
                  border: `1px solid ${a.color}30`,
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  transition: 'box-shadow 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 30px ${a.color}25, 0 10px 40px rgba(0,0,0,0.3)`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: 14,
                    background: `${a.color}18`,
                    border: `1px solid ${a.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    boxShadow: `0 0 16px ${a.color}30`,
                  }}>{a.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{a.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0 }}>{a.subtitle}</p>
                  </div>
                  <span style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontFamily: 'var(--font-mono)',
                    color: a.color,
                    background: `${a.color}12`,
                    border: `1px solid ${a.color}30`,
                  }}>{a.tag}</span>
                  <p style={{ color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--font-mono)', margin: 'auto 0 0', opacity: 0.5 }}>click to reveal ▶</p>
                </div>

                {/* Back */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  padding: '28px',
                  background: `linear-gradient(135deg, ${a.color}20, rgba(10,10,20,0.95))`,
                  border: `1px solid ${a.color}50`,
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 16,
                  boxShadow: `0 0 30px ${a.color}20`,
                }}>
                  <div style={{ fontSize: 32 }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: a.color, margin: 0 }}>{a.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--font-mono)', margin: 0, opacity: 0.5 }}>click to close ◀</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
