import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, useScroll as useDreiScroll, ScrollControls, Sphere, MeshDistortMaterial, Wireframe, Html } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';

// The massive rotating AI core on the right side
function AICore({ isMobile }) {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    
    // Slow rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.1;
      coreRef.current.rotation.z += delta * 0.05;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.2;
      ring1Ref.current.rotation.y -= delta * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.1;
      ring2Ref.current.rotation.z += delta * 0.15;
    }

    // Parallax with mouse
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2);
    
    // Calculate scroll to keep the core away from the camera
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    if (coreRef.current) {
      // Base positions
      const baseX = isMobile ? 0 : 4;
      // On mobile, push it further back as we scroll so the camera (-15z max) doesn't enter it
      const baseZ = isMobile ? -5 - (scrollProgress * 15) : -2;
      
      coreRef.current.position.x += (targetX + baseX - coreRef.current.position.x) * 0.05;
      coreRef.current.position.y += (targetY - coreRef.current.position.y) * 0.05;
      // Note: we're applying Z to the group wrapper in the return, but let's apply it here to the core if needed.
      // Actually, better to apply it to the group. Let's do that below.
    }
  });

  // Mobile places it center behind text, desktop places it on the right
  const scale = isMobile ? 0.5 : 1;
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Move the entire group backwards as we scroll so the camera never passes through it
    const baseZ = isMobile ? -5 - (scrollProgress * 15) : -2;
    groupRef.current.position.z += (baseZ - groupRef.current.position.z) * 0.1;
  });

  return (
    <group ref={groupRef} position={[isMobile ? 0 : 4, 0, -5]} scale={scale}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Sphere */}
        <Sphere ref={coreRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={isMobile ? 0.8 : 1.5}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            distort={0.4}
            speed={2}
          />
        </Sphere>
        
        {/* Orbiting Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#7c3aed" />
        </mesh>
        
        {/* Orbiting Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#00d4ff" />
        </mesh>
        
        {/* Wireframe cage */}
        <Sphere args={[2, 16, 16]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
        </Sphere>
      </Float>
    </group>
  );
}

// Embers/Particles flying upwards
function Embers() {
  const count = 100;
  const mesh = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      const factor = Math.random() * 0.5 + 0.5;
      const speed = Math.random() * 0.01 + 0.005;
      temp.push({ x, y, z, factor, speed });
    }
    return temp;
  }, []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      particle.y += particle.speed;
      if (particle.y > 10) particle.y = -10;
      
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.setScalar(particle.factor);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <planeGeometry args={[0.05, 0.05]} />
      <meshBasicMaterial color="#00ff88" transparent opacity={0.6} depthWrite={false} />
    </instancedMesh>
  );
}

// Camera controller tied to window scroll
function ScrollCamera() {
  const { camera } = useThree();
  
  useFrame(() => {
    // We don't use ScrollControls here because we want to tie it to the main window scroll
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Move camera deeply into the Z axis as we scroll, creating a physical journey
    const targetZ = 5 - (scrollProgress * 15); // Move from z=5 to z=-10
    const targetY = -(scrollProgress * 2); // Slight dip
    
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
  });
  return null;
}

export default function CinematicEnvironment() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: '#020202' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: false, alpha: false }}>
        <color attach="background" args={['#020202']} />
        {/* Volumetric Fog */}
        <fogExp2 attach="fog" args={['#020202', 0.08]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00d4ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7c3aed" />

        <ScrollCamera />
        <AICore isMobile={isMobile} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        <Embers />

        <EffectComposer disableNormalPass multisampling={4}>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
          <Noise opacity={0.03} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
