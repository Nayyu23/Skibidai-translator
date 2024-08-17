// ToiletModel.js

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function ToiletModel({ modelPath }) {
  const ref = useRef();
  const { scene } = useGLTF(modelPath); // Load the 3D model

  // Center the model's geometry to ensure it rotates around its own axis
  scene.traverse((child) => {
    if (child.isMesh) {
      child.geometry.center(); // Centers the geometry to ensure correct rotation
      child.castShadow = true; // Enable shadow casting
      child.receiveShadow = true; // Enable shadow receiving
    }
  });

  // Use the useFrame hook to rotate the model around its own axis
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.05; // Increase this value to rotate faster
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.03, 0.03, 0.03]} // Adjust scale as needed
      position={[0, 0, 0]} // Center the model at the origin
    />
  );
}

export default ToiletModel;
