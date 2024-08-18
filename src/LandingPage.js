import React from 'react';
import { Canvas } from '@react-three/fiber';
import ToiletModel from './ToiletModel';
import PromptChanger from './PromptChanger';
import ConveyorBelt from './ConveyorBelt';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="prompt-container">
        <PromptChanger />
      </div>

      <div className="model-container">
        <Canvas shadows camera={{ position: [0, 3, 5], fov: 80 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={4}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <ToiletModel modelPath="/toilet.glb" />
        </Canvas>
      </div>
      

      <div className="translator-container">
        {/* Insert your translator component here */}
      </div>

      
    </div>
  );
};

export default LandingPage;
