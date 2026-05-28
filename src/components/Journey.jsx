import React from 'react';
import { motion } from 'framer-motion';

const logs = [
  { id: 'LOG.01', year: '2024', status: 'COMPLETED', title: 'INITIATED AIML NEURAL TRAINING', desc: 'Enrolled in final-year AIML specialization. Uploaded machine learning algorithms, neural networks, and AI fundamentals to core memory.' },
  { id: 'LOG.02', year: '2024', status: 'VERIFIED', title: 'JAVA BACKEND ARCHITECTURE', desc: 'Mastered core Java, OOP principles, data structures, and algorithms. Server infrastructure foundation established.' },
  { id: 'LOG.03', year: '2024', status: 'DEPLOYED', title: 'WEB PROTOCOLS ACQUIRED', desc: 'Full-stack development capabilities unlocked. React, Node.js, and modern web tech deployed successfully.' },
  { id: 'LOG.04', year: '2024', status: 'COMBAT TESTED', title: 'HACKATHON DEPLOYMENTS', desc: 'Survived multiple high-pressure hackathon environments. Executed EV Log analytics system under extreme time constraints.' },
  { id: 'LOG.05', year: '2025', status: 'ACTIVE', title: 'AI RESUME OPTIMIZER ONLINE', desc: 'Engineered an AI-powered resume optimization platform using TypeScript, AI APIs, and full-stack architecture.' },
  { id: 'LOG.06', year: '2025', status: 'ACTIVE', title: 'TEXTILE CONNECT PRO LAUNCHED', desc: 'Digital marketplace operational. Connecting textile businesses with buyers using advanced TypeScript architecture.' },
  { id: 'LOG.07', year: '2025', status: 'CLASSIFIED', title: 'VOICE DETECTION AI', desc: 'Engineered an API capable of detecting AI-generated vs human voices. Machine learning models integrated into backend.' },
];

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '150px 5vw', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 800 }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)',
            letterSpacing: '4px', marginBottom: '10px'
          }}>
            [ DIRECTORY // CAMPAIGN_LOGS ]
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '2px',
            color: '#fff', textShadow: '0 0 30px rgba(255,255,255,0.2)'
          }}>
            Training & Directives
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '20px' }} />
        </motion.div>

        {/* Data Logs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              style={{
                position: 'relative',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(0, 212, 255, 0.1)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
              }}
            >
              {/* Scanline effect on hover (CSS handled inline for simplicity, but better via CSS classes normally) */}
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '2px' }}>
                    {log.id}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>
                    [{log.year}]
                  </span>
                </div>
                <div style={{ 
                  fontFamily: 'var(--font-mono)', fontSize: '9px', padding: '4px 8px',
                  background: log.status === 'CLASSIFIED' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(0, 255, 136, 0.1)',
                  color: log.status === 'CLASSIFIED' ? 'var(--accent-purple)' : 'var(--accent-green)',
                  border: `1px solid ${log.status === 'CLASSIFIED' ? 'var(--accent-purple)' : 'var(--accent-green)'}`,
                  letterSpacing: '1px'
                }}>
                  {log.status}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600,
                  margin: '0 0 10px 0', color: '#fff', letterSpacing: '1px'
                }}>
                  {log.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)',
                  lineHeight: 1.6, margin: 0, maxWidth: '90%'
                }}>
                  {log.desc}
                </p>
              </div>

              {/* Decorative Corner Bracket */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderRight: '1px solid var(--accent-cyan)', borderBottom: '1px solid var(--accent-cyan)', opacity: 0.5 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
