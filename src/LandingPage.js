import React from 'react';
import { Canvas } from '@react-three/fiber';
import ToiletModel from './ToiletModel'; // Import the 3D model component
import PromptChanger from './PromptChanger'; // Import the PromptChanger component

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="prompt-container">
        <PromptChanger />
      </div>

      <div className="model-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[2, 5, 2]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ToiletModel modelPath="/toilet.glb" />
        </Canvas>
      </div>
    </div>
  );
};

export default LandingPage;
