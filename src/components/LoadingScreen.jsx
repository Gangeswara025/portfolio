import React, { useEffect, useState } from 'react';

const loadingTexts = [
  'Initializing AI Core...',
  'Loading 3D Environment...',
  'Compiling Projects...',
  'Warming up Neural Networks...',
  'Almost there...',
  'Welcome.',
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const steps = loadingTexts.length;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (100 / steps);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHiding(true);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return next;
      });
      setTextIndex(prev => Math.min(prev + 1, loadingTexts.length - 1));
    }, 420);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loading-screen" className={hiding ? 'hidden' : ''}>
      {/* Animated rings */}
      <div style={{
        position: 'absolute',
        width: 300, height: 300,
        borderRadius: '50%',
        border: '1px solid rgba(0,212,255,0.1)',
        animation: 'spin-slow 8s linear infinite',
      }}>
        <div style={{
          position: 'absolute',
          top: -2, left: '50%', transform: 'translateX(-50%)',
          width: 4, height: 4, borderRadius: '50%',
          background: 'var(--accent-cyan)',
          boxShadow: '0 0 8px rgba(0,212,255,0.8)',
        }} />
      </div>
      <div style={{
        position: 'absolute',
        width: 220, height: 220,
        borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.15)',
        animation: 'spin-slow 5s linear infinite reverse',
      }}>
        <div style={{
          position: 'absolute',
          top: -2, left: '50%', transform: 'translateX(-50%)',
          width: 4, height: 4, borderRadius: '50%',
          background: 'var(--accent-purple)',
          boxShadow: '0 0 8px rgba(124,58,237,0.8)',
        }} />
      </div>

      {/* Logo */}
      <div className="loading-logo">GJ</div>

      {/* Progress bar */}
      <div className="loading-bar-track">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Text */}
      <div className="loading-text">{loadingTexts[textIndex]}</div>
    </div>
  );
}
