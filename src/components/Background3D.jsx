import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function StarField() {
  const ref = useRef();

  useFrame((state, delta) => {
    // Slowly rotate the entire starfield for a continuous subtle motion
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.03;
    
    // Add subtle parallax based on mouse pointer
    // Using lerp for smooth transition
    ref.current.position.x += (state.pointer.x * 0.5 - ref.current.position.x) * 0.05;
    ref.current.position.y += (state.pointer.y * 0.5 - ref.current.position.y) * 0.05;
  });

  return (
    <group ref={ref}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={1} 
        fade 
        speed={1} 
      />
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: 0, // Put it just above the very back background but below content
      pointerEvents: 'none', // Don't block clicks
      opacity: 0.6 // Blend it well with the existing background
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}
