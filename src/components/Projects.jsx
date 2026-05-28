import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'PRJ.01',
    name: 'AI Resume Optimizer',
    type: 'NEURAL MODULE',
    status: 'DEPLOYED',
    stack: 'React / TypeScript / AI APIs',
    desc: 'An AI-powered system designed to analyze and optimize resumes against job descriptions, maximizing ATS compatibility.',
    github: 'https://github.com/Gangeswara025/AI-Resume-Optimizer.git',
    deploy: 'https://trintz-resume-optimizer.vercel.app/',
    metrics: ['+40% Match Rate', '<2s Analysis Time', 'REST API']
  },
  {
    id: 'PRJ.02',
    name: 'Textile Connect Pro',
    type: 'TRADE REACTOR',
    status: 'ACTIVE',
    stack: 'MERN / TypeScript / Socket.io',
    desc: 'A high-performance B2B digital marketplace bridging textile manufacturers with global buyers through real-time bidding.',
    github: 'https://github.com/Gangeswara025/textile-connect-pro.git',
    deploy: 'https://textile-connect-pro.vercel.app/',
    metrics: ['Real-time Sockets', 'JWT Auth', 'Payment Gateway']
  },
  {
    id: 'PRJ.03',
    name: 'Voice Detection API',
    type: 'SECURITY NODE',
    status: 'BETA',
    stack: 'Python / Flask / Machine Learning',
    desc: 'A security classification API engineered to distinguish between human speech and AI-generated deepfakes using neural network models.',
    github: 'https://github.com/Gangeswara025/GUVI-AI-vs-Human-voice-detector.git',
    deploy: 'https://guvi-ai-vs-human-voice-detector.onrender.com/',
    metrics: ['98.2% Accuracy', 'Fast Inference', 'Scalable']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '150px 5vw', position: 'relative', zIndex: 2, perspective: '1000px' }}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '100px' }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '8px' }}>
          [ PROJECT_ARSENAL ]
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, textTransform: 'uppercase', margin: '10px 0', textShadow: '0 0 40px rgba(0,212,255,0.3)' }}>
          Active Modules
        </h2>
      </motion.div>

      {/* Floating Holograms */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center' }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateX: 20, rotateY: -20, z: -100 }}
            whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, z: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -20, 
              scale: 1.05, 
              boxShadow: '0 0 60px rgba(0,212,255,0.2), inset 0 0 30px rgba(0,212,255,0.1)',
              borderColor: 'var(--accent-cyan)'
            }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            onClick={() => setSelectedProject(p)}
            style={{
              width: '320px',
              height: '320px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,212,255,0.05))',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              cursor: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '30px',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)', // Sci-fi angled corner
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Background Grid Pattern */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%), repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,212,255,0.03) 20px, rgba(0,212,255,0.03) 21px)', pointerEvents: 'none', zIndex: -1 }} />

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)' }}>{p.id}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', padding: '4px 8px', background: 'rgba(0,255,136,0.1)', color: 'var(--accent-green)', border: '1px solid var(--accent-green)' }}>{p.status}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>{p.name}</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>{p.type}</div>
            </div>

            <div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '15px' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>CLICK TO INITIALIZE PROTOCOL</div>
            </div>
            
            {/* Hover Crosshairs */}
            <div style={{ position: 'absolute', top: 10, left: 10, width: 10, height: 10, borderTop: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }} />
            <div style={{ position: 'absolute', top: 10, right: 10, width: 10, height: 10, borderTop: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }} />
            <div style={{ position: 'absolute', bottom: 10, left: 10, width: 10, height: 10, borderBottom: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }} />
            <div style={{ position: 'absolute', bottom: 10, right: 40, width: 10, height: 10, borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }} />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Hologram Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              style={{
                width: '100%', maxWidth: '900px',
                border: '1px solid var(--accent-cyan)',
                background: '#050508',
                padding: '50px',
                position: 'relative',
                boxShadow: '0 0 100px rgba(0,212,255,0.1)'
              }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'transparent', border: '1px solid var(--accent-cyan)',
                  color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)',
                  padding: '8px 16px', cursor: 'none',
                  textTransform: 'uppercase', fontSize: '10px'
                }}
              >
                [ CLOSE_PROTOCOL ]
              </button>

              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '12px', marginBottom: 20 }}>
                // MODULE: {selectedProject.id}
              </div>
              
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', textTransform: 'uppercase', margin: '0 0 30px 0' }}>
                {selectedProject.name}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>MISSION_PARAMETERS</h4>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    {selectedProject.desc}
                  </p>
                </div>
                
                <div>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>TECH_STACK</h4>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-purple)' }}>
                    {selectedProject.stack}
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', margin: '30px 0 20px 0' }}>SYSTEM_METRICS</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#fff' }}>
                    {selectedProject.metrics.map((m, i) => (
                      <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: 4, height: 4, background: 'var(--accent-green)' }}/> {m}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '15px', marginTop: '40px', flexWrap: 'wrap' }}>
                    <a href={selectedProject.deploy} target="_blank" rel="noreferrer" style={{
                      padding: '12px 24px', background: 'var(--accent-cyan)', color: '#000',
                      textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '12px',
                      fontWeight: 'bold', textTransform: 'uppercase'
                    }}>
                      INITIALIZE DEPLOYMENT
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" style={{
                      padding: '12px 24px', background: 'transparent', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)',
                      textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '12px',
                      fontWeight: 'bold', textTransform: 'uppercase'
                    }}>
                      ACCESS SOURCE CODE
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
