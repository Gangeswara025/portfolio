import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSequence({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence timing
    const t1 = setTimeout(() => setPhase(1), 800); // Glitch flash
    const t2 = setTimeout(() => setPhase(2), 2500); // Radar / Terminal text
    const t3 = setTimeout(() => setPhase(3), 5500); // System online
    const t4 = setTimeout(() => onComplete(), 7500); // Fade out to main
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); }
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#020202',
            color: 'var(--accent-cyan)',
            fontFamily: 'var(--font-mono)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Noise Overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
            pointerEvents: 'none'
          }} />

          {/* Glitch Flash Phase */}
          {phase === 1 && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: [0, 1, 0, 1, 0], scale: 1, x: [-10, 10, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: '40px', fontWeight: 'bold', letterSpacing: '8px',
                color: 'red', textShadow: '0 0 20px red',
                mixBlendMode: 'screen'
              }}
            >
              SYSTEM OFFLINE
            </motion.div>
          )}

          {/* Boot Terminal Phase */}
          {phase >= 2 && (
            <div style={{ width: '80%', maxWidth: '600px', textAlign: 'left', zIndex: 2 }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: 20 }}>
                <div style={{ height: 2, width: '100%', background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)', opacity: 0.5 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 4, opacity: 0.7 }}>
                  <span>GJJ-CORE OS v1.0.4</span>
                  <span>ENCRYPTED CONNECTION</span>
                </div>
              </motion.div>

              <TerminalLine text="> INITIATING NEURAL BOOT SEQUENCE..." delay={0} />
              <TerminalLine text="> BYPASSING FIREWALL... OK" delay={0.4} />
              <TerminalLine text="> LOADING WEAPONIZED PORTFOLIO ASSETS..." delay={0.8} />
              <TerminalLine text="> SYNCING 3D ENVIRONMENT PROTOCOLS..." delay={1.4} />
              
              {phase >= 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ 
                    marginTop: 40, fontSize: 32, fontWeight: 800, 
                    color: '#fff', textShadow: '0 0 20px var(--accent-cyan)',
                    letterSpacing: '10px'
                  }}
                >
                  SYSTEM ONLINE
                </motion.div>
              )}
            </div>
          )}

          {/* Radar Scanning Line */}
          {phase >= 2 && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', left: 0, right: 0, height: '10vh',
                background: 'linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                borderBottom: '1px solid rgba(0, 212, 255, 0.4)',
                pointerEvents: 'none'
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TerminalLine({ text, delay }) {
  const [visible, setVisible] = useState('');
  
  useEffect(() => {
    let t;
    const start = setTimeout(() => {
      let i = 0;
      t = setInterval(() => {
        setVisible(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(t);
      }, 30);
    }, delay * 1000);
    return () => { clearTimeout(start); clearInterval(t); };
  }, [text, delay]);

  return (
    <div style={{ fontSize: 14, margin: '8px 0', opacity: 0.8 }}>
      {visible}
      <span style={{ animation: 'blink 1s infinite' }}>_</span>
    </div>
  );
}
