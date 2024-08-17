import React, { useState, useEffect } from 'react';

const prompts = ['skibidi?', 'sigma?', 'ohio?', 'rizz?'];
const colors = ['#007BFF', '#28A745', '#FFC107', '#FF5733']; // Different colors for each prompt

const PromptChanger = () => {
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationClass('fade-slide-out'); // Start the fade-out and slide-down animation
    }, 2000); // Show each prompt for 2 seconds

    const timer2 = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % prompts.length); // Change to the next prompt
      setAnimationClass('fade-slide-in'); // Start the fade-in and slide-up animation with color change
    }, 2500); // Wait 0.5 seconds after fade-out to change prompt

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [index]);

  return (
    <div className="prompt-container">
      <div className="text-container">
        <span className="static-text">What is </span>
        <span className="prompt-wrapper">
          <span className={`prompt-text ${animationClass}`} style={{ color: colors[index] }}>
            {prompts[index]}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PromptChanger;
