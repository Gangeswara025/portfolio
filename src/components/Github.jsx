import React from 'react';
import { motion } from 'framer-motion';

export default function Github() {
  return (
    <section id="github" style={{ padding: '150px 5vw', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-purple)', letterSpacing: '8px' }}>
          [ INTELLIGENCE_CENTER ]
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, textTransform: 'uppercase', margin: '10px 0', textShadow: '0 0 40px rgba(124,58,237,0.3)' }}>
          Code Repositories
        </h2>
      </motion.div>

      {/* Radar Visual instead of generic graph */}
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Radar Rings */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.2)' }} />
        <div style={{ position: 'absolute', inset: '50px', borderRadius: '50%', border: '1px solid rgba(124,58,237,0.3)' }} />
        <div style={{ position: 'absolute', inset: '100px', borderRadius: '50%', border: '1px solid rgba(124,58,237,0.5)', background: 'rgba(124,58,237,0.05)' }} />
        
        {/* Crosshairs */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(124,58,237,0.2)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: 'rgba(124,58,237,0.2)' }} />

        {/* Sweeping Radar Line */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: '150px', height: '150px',
            transformOrigin: '0 0',
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(124,58,237,0.4) 360deg)',
            borderRadius: '0 100% 0 0',
            pointerEvents: 'none'
          }}
        />

        {/* Top Repositories as Radar Blips */}
        <RadarBlip angle={45} distance={80} name="AI-Resume-Optimizer" color="var(--accent-cyan)" />
        <RadarBlip angle={160} distance={120} name="Textile-Connect" color="var(--accent-green)" />
        <RadarBlip angle={290} distance={60} name="Voice-Detection-API" color="var(--accent-gold)" />

      </div>

      <motion.a 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        href="https://github.com/Gangeswara025" 
        target="_blank" 
        rel="noreferrer"
        style={{
          marginTop: '80px',
          padding: '16px 40px',
          background: 'rgba(124,58,237,0.1)',
          border: '1px solid var(--accent-purple)',
          color: '#fff',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '3px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent-purple)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
        }}
      >
        ACCESS GITHUB MAINFRAME
      </motion.a>

    </section>
  );
}

function RadarBlip({ angle, distance, name, color }) {
  const x = Math.cos(angle * Math.PI / 180) * distance;
  const y = Math.sin(angle * Math.PI / 180) * distance;

  return (
    <div style={{ position: 'absolute', transform: `translate(${x}px, ${y}px)` }}>
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: 8, height: 8, borderRadius: '50%', background: color,
          boxShadow: `0 0 10px ${color}`
        }}
      />
      <div style={{
        position: 'absolute', top: '-10px', left: '15px',
        fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#fff',
        whiteSpace: 'nowrap', opacity: 0.7
      }}>
        {name}
      </div>
    </div>
  );
}
