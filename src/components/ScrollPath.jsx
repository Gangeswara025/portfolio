import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '4px',
      transform: 'translateX(-50%)',
      zIndex: 0,
      pointerEvents: 'none',
    }} className="hide-mobile">
      {/* Background track */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '4px',
      }} />
      
      {/* Glowing progress line */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          borderRadius: '4px',
          transformOrigin: 'top',
          scaleY
        }}
      />
    </div>
  );
}
