import React, { useState, useEffect, useRef } from 'react';

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'jjgangeswara@gmail.com',
    href: 'mailto:jjgangeswara@gmail.com',
    color: '#00d4ff',
    cmd: 'open --email jjgangeswara@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gangeswarajj25',
    href: 'https://linkedin.com/in/gangeswarajj25',
    color: '#0077b5',
    cmd: 'open --linkedin gangeswarajj25',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Gangeswara025',
    href: 'https://github.com/Gangeswara025',
    color: '#7c3aed',
    cmd: 'open --github Gangeswara025',
  },
];

const terminalLines = [
  { text: '> Initializing contact protocol...', color: 'var(--accent-cyan)', delay: 0 },
  { text: '> Loading contact modules... ✓', color: '#00ff88', delay: 600 },
  { text: '> Establishing secure connection... ✓', color: '#00ff88', delay: 1200 },
  { text: '> Ready. Awaiting your message.', color: 'var(--accent-purple)', delay: 1800 },
  { text: '', delay: 2400 },
  { text: '> Available channels:', color: 'var(--text-muted)', delay: 2600 },
];

export default function Contact() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        terminalLines.forEach((line, i) => {
          setTimeout(() => {
            setVisibleLines(prev => [...prev, line]);
          }, line.delay);
        });
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 2000);
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '120px 20px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04), transparent)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-tag">◈ Terminal Access</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Open a channel — I respond within 24 hours</p>
        </div>

        <div className="responsive-grid">
          {/* Terminal */}
          <div style={{
            background: 'rgba(5,5,8,0.9)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(0,212,255,0.08)',
          }}>
            {/* Terminal top bar */}
            <div style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>
                gangeswara@portfolio:~$
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: '24px', minHeight: 320, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }}>
              {visibleLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.color || 'var(--text-secondary)',
                    animation: 'fadeInUp 0.3s ease',
                  }}
                >
                  {line.text}
                </div>
              ))}

              {visibleLines.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
                  <span style={{ color: 'var(--accent-green)' }}>❯</span>
                  <span style={{
                    display: 'inline-block',
                    width: 8, height: 16,
                    background: 'var(--accent-cyan)',
                    animation: 'blink 1s step-end infinite',
                  }} />
                </div>
              )}

              {/* Contact links */}
              {visibleLines.length >= terminalLines.length && (
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {contactLinks.map(c => (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        borderRadius: 10,
                        background: `${c.color}08`,
                        border: `1px solid ${c.color}25`,
                        textDecoration: 'none',
                        transition: 'all 0.25s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${c.color}18`;
                        e.currentTarget.style.borderColor = c.color;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${c.color}08`;
                        e.currentTarget.style.borderColor = `${c.color}25`;
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{c.icon}</span>
                      <div>
                        <div style={{ color: c.color, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 28 }}>
              Have an opportunity, project idea, or just want to connect?
            </p>

            {sent ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                animation: 'scaleIn 0.4s ease',
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                <h4 style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text', icon: '👤' },
                  { name: 'email', placeholder: 'Your Email', type: 'email', icon: '✉️' },
                ].map(field => (
                  <div key={field.name} style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute',
                      left: 14, top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: 16, zIndex: 1,
                    }}>{field.icon}</span>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.name]}
                      onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 14px 13px 42px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 10,
                        color: '#fff',
                        fontFamily: 'var(--font-main)',
                        fontSize: 14,
                        outline: 'none',
                        transition: 'border-color 0.25s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                ))}
                <textarea
                  placeholder="Your message..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    padding: '13px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    color: '#fff',
                    fontFamily: 'var(--font-main)',
                    fontSize: 14,
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.25s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={sending}
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  <span>{sending ? '⚡ Sending...' : '🚀 Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
