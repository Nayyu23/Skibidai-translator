import React, { useState, useEffect, useRef } from 'react';

function ConveyorBelt({ words, translateWord }) {
  const conveyorRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (conveyorRef.current) {
      conveyorRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (conveyorRef.current) {
      conveyorRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="conveyor-belt">
      <div className="conveyor-content" ref={conveyorRef}>
        {words.concat(words).map((word, index) => (
          <span
            key={index}
            className="conveyor-word"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIndex === index ? translateWord(word) : word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ConveyorBelt;