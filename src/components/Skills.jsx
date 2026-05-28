import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'React', icon: '⚛️', color: '#61dafb', angle: 0, radius: 180, speed: 0.0008 },
  { name: 'Java', icon: '☕', color: '#f89820', angle: 40, radius: 180, speed: 0.0006 },
  { name: 'Spring Boot', icon: '🍃', color: '#6db33f', angle: 80, radius: 180, speed: 0.0007 },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', angle: 120, radius: 180, speed: 0.0009 },
  { name: 'TypeScript', icon: '📘', color: '#3178c6', angle: 160, radius: 180, speed: 0.0006 },
  { name: 'Python', icon: '🐍', color: '#3776ab', angle: 200, radius: 180, speed: 0.0008 },
  { name: 'Machine Learning', icon: '🧠', color: '#ff6b6b', angle: 240, radius: 180, speed: 0.0005 },
  { name: 'MongoDB', icon: '🍃', color: '#47a248', angle: 280, radius: 180, speed: 0.0007 },
  { name: 'React', icon: '⚛️', color: '#61dafb', angle: 320, radius: 180, speed: 0.0008 },
  { name: 'Git', icon: '📝', color: '#f05032', angle: 15, radius: 280, speed: 0.0004 },
  { name: 'GitHub', icon: '🐱', color: '#fff', angle: 75, radius: 280, speed: 0.0005 },
  { name: 'REST API', icon: '🔗', color: '#00d4ff', angle: 135, radius: 280, speed: 0.0004 },
  { name: 'HTML', icon: '🌐', color: '#e34f26', angle: 195, radius: 280, speed: 0.0005 },
  { name: 'CSS', icon: '🎨', color: '#264de4', angle: 255, radius: 280, speed: 0.0004 },
  { name: 'Tailwind', icon: '💨', color: '#06b6d4', angle: 315, radius: 280, speed: 0.0005 },
];

const uniqueSkills = [
  { name: 'React', icon: '⚛️', color: '#61dafb', angle: 0, radius: 180, speed: 0.0008 },
  { name: 'Java', icon: '☕', color: '#f89820', angle: 40, radius: 180, speed: 0.0006 },
  { name: 'Spring Boot', icon: '🍃', color: '#6db33f', angle: 80, radius: 180, speed: 0.0007 },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', angle: 120, radius: 180, speed: 0.0009 },
  { name: 'TypeScript', icon: '📘', color: '#3178c6', angle: 160, radius: 180, speed: 0.0006 },
  { name: 'Python', icon: '🐍', color: '#3776ab', angle: 200, radius: 180, speed: 0.0008 },
  { name: 'ML', icon: '🧠', color: '#ff6b6b', angle: 240, radius: 180, speed: 0.0005 },
  { name: 'MongoDB', icon: '🗄️', color: '#47a248', angle: 280, radius: 180, speed: 0.0007 },
  { name: 'Node.js', icon: '🟢', color: '#339933', angle: 320, radius: 180, speed: 0.0008 },
  { name: 'Git', icon: '📝', color: '#f05032', angle: 15, radius: 280, speed: 0.0004 },
  { name: 'GitHub', icon: '🐙', color: '#ffffff', angle: 75, radius: 280, speed: 0.0005 },
  { name: 'REST API', icon: '🔗', color: '#00d4ff', angle: 135, radius: 280, speed: 0.0004 },
  { name: 'HTML', icon: '🌐', color: '#e34f26', angle: 195, radius: 280, speed: 0.0005 },
  { name: 'CSS', icon: '🎨', color: '#264de4', angle: 255, radius: 280, speed: 0.0004 },
  { name: 'Tailwind', icon: '💨', color: '#06b6d4', angle: 315, radius: 280, speed: 0.0005 },
];

export default function Skills() {
  const canvasRef = useRef(null);
  const angleRef = useRef(uniqueSkills.map(s => s.angle * Math.PI / 180));
  const hoveredRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const SIZE = Math.min(window.innerWidth - 40, 700);
    canvas.width = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2;
    const cy = SIZE / 2;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left - cx;
      const my = e.clientY - rect.top - cy;
      let found = null;
      uniqueSkills.forEach((s, i) => {
        const a = angleRef.current[i];
        const sx = cx + Math.cos(a) * s.radius;
        const sy = cy + Math.sin(a) * s.radius;
        const dist = Math.sqrt((mx - (sx - cx)) ** 2 + (my - (sy - cy)) ** 2);
        if (dist < 32) found = i;
      });
      hoveredRef.current = found;
    });

    canvas.addEventListener('mouseleave', () => { hoveredRef.current = null; });

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Center AI core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      coreGrad.addColorStop(0, 'rgba(0,212,255,0.5)');
      coreGrad.addColorStop(0.5, 'rgba(124,58,237,0.3)');
      coreGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 58, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,212,255,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = 'bold 13px Outfit';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.fillText('AI', cx, cy - 4);
      ctx.fillText('CORE', cx, cy + 12);

      // Orbit rings
      [180, 280].forEach(r => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Skills
      uniqueSkills.forEach((s, i) => {
        angleRef.current[i] += s.speed;
        const a = angleRef.current[i];
        const sx = cx + Math.cos(a) * s.radius;
        const sy = cy + Math.sin(a) * s.radius;
        const isHovered = hoveredRef.current === i;
        const size = isHovered ? 30 : 22;

        // Line from center to skill
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `${s.color}20`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Glow
        if (isHovered) {
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 44);
          glow.addColorStop(0, `${s.color}50`);
          glow.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(sx, sy, 44, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Skill node
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? `${s.color}30` : `${s.color}15`;
        ctx.fill();
        ctx.strokeStyle = isHovered ? s.color : `${s.color}60`;
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Icon
        ctx.font = `${isHovered ? 18 : 14}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 1;
        ctx.fillText(s.icon, sx, sy);

        // Label on hover
        if (isHovered) {
          ctx.font = 'bold 12px Outfit';
          ctx.fillStyle = s.color;
          ctx.textBaseline = 'top';
          ctx.fillText(s.name, sx, sy + size + 6);
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="skills" style={{ padding: '120px 20px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-header reveal">
          <div className="section-tag">◈ Skills Galaxy</div>
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-subtitle">15+ technologies orbiting my AI Core — hover to explore</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <canvas
            ref={canvasRef}
            style={{
              maxWidth: '100%',
              cursor: 'none',
              filter: 'drop-shadow(0 0 40px rgba(0,212,255,0.1))',
            }}
          />
        </div>

        {/* Skill chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 40 }}>
          {uniqueSkills.map(s => (
            <div
              key={s.name + s.angle}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 16px',
                borderRadius: 20,
                background: `${s.color}10`,
                border: `1px solid ${s.color}30`,
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: s.color,
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${s.color}25`;
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `0 0 14px ${s.color}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${s.color}10`;
                e.currentTarget.style.borderColor = `${s.color}30`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>{s.icon}</span> {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
