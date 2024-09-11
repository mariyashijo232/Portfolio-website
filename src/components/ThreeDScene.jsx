import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { MathUtils } from 'three';

const FloatingSpecks = () => {
  const pointsRef = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 1000; i++) {
      positions.push(MathUtils.randFloatSpread(20)); 
      positions.push(MathUtils.randFloatSpread(20)); 
      positions.push(MathUtils.randFloatSpread(20));
    }
    return new Float32Array(positions);
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial 
        color="white" 
        size={0.1} 
        sizeAttenuation
        transparent
        opacity={0.6} 
      />
    </Points>
  );
};
const ThreeDScene = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      camera={{ position: [0, 0, 15], fov: 75 }}
      shadows
    >
      <ambientLight intensity={1} />
      <FloatingSpecks />   
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDScene;
