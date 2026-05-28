import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  let animId;

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onEnter = () => {
      if (ringRef.current) ringRef.current.classList.add('hover');
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
        dotRef.current.style.background = 'var(--accent-purple)';
      }
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.classList.remove('hover');
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        dotRef.current.style.background = 'var(--accent-cyan)';
      }
    };

    window.addEventListener('mousemove', onMove);

    const interactive = document.querySelectorAll('a, button, [style*="cursor"]');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
