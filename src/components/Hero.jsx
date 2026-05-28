import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [time, setTime] = useState(new Date().toISOString());
  
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toISOString()), 100);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center',
      padding: '0 5vw',
      overflow: 'hidden' 
    }}>
      {/* Left Content Container */}
      <div style={{
        maxWidth: '800px',
        position: 'relative',
        zIndex: 2,
        // Push slightly down to align with the massive 3D core on the right
        marginTop: '5vh' 
      }}>
        
        {/* Mission Briefing Label */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-cyan)',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}
        >
          <div style={{ width: 40, height: 1, background: 'var(--accent-cyan)' }} />
          <span>SYS.MISSION_BRIEFING // 001</span>
        </motion.div>

        {/* Massive Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.7 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(60px, 9vw, 140px)',
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: '-4px',
            margin: 0,
            color: '#ffffff',
            textTransform: 'uppercase'
          }}
        >
          GANGESWARA
          <br/>
          <span style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px rgba(255,255,255,0.2)',
            display: 'inline-block',
            marginTop: '10px'
          }}>
            J J
          </span>
        </motion.h1>

        {/* Floating Tactical Data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3.5 }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-muted)',
            textAlign: 'right',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}
          className="hide-mobile"
        >
          <div>TARGET_LOCK: ACTIVE</div>
          <div>MEM_ALLOC: 94.2%</div>
          <div>{time}</div>
        </motion.div>

        {/* Animated Roles */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            gap: '30px',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--accent-purple)',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          <div>[ FULL STACK ]</div>
          <div>[ AIML ENGINEER ]</div>
        </motion.div>

        {/* Tactical Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          style={{ display: 'flex', gap: '20px', marginTop: '60px' }}
        >
          <a href="#projects" style={{
            padding: '16px 40px',
            background: 'transparent',
            border: '1px solid var(--accent-cyan)',
            color: 'var(--accent-cyan)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '3px',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            Engage Arsenal
          </a>
        </motion.div>
      </div>

      {/* Decorative Scanline Overlays for the entire hero */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        pointerEvents: 'none',
        zIndex: 9
      }} />
    </section>
  );
}
