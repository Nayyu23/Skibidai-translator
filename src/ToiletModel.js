import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function ToiletModel({ modelPath }) {
  const ref = useRef();
  const { scene } = useGLTF(modelPath); // Load the 3D model
  const scrollRef = useRef(0);

  // Center the model's geometry to ensure it rotates around its own axis
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI;
    }

    // Function to update the scrollRef.current based on the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      scrollRef.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(() => {
    if (ref.current) {
      const scrollY = scrollRef.current;
      ref.current.rotation.y = scrollY * 0.01 + Math.PI; 

      const scale = Math.max(0.5, 2.5 - scrollY * 0.002); // scales from 2.5 to 0.5 (upper/lower limit)
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[1, 1, 1]}
      position={[0, -3, 0]}
    />
  );
}

export default ToiletModel;
