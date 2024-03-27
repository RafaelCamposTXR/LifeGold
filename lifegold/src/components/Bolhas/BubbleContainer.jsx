import React, { useState, useEffect } from 'react';
import './Bubble.css';

const Bubble = ({ size, borderWidth, top, left }) => {
  return (
    <div
      className="bubble"
      style={{ width: size, height: size, borderWidth, top, left }}
    ></div>
  );
};

const BubbleContainer = ({ numBubbles, areaWidth, areaHeight }) => {
  const [bubbles, setBubbles] = useState([]);

  const isBubbleVisible = (bubble) => {
    return bubble.top + bubble.size > 0 && bubble.top < areaHeight && bubble.left + bubble.size > 0 && bubble.left < areaWidth;
  };

  const generateRandomBubbles = () => {

    const visibleBubbles = bubbles.filter(isBubbleVisible);

    const newBubbles = [...visibleBubbles];
    for (let i = visibleBubbles.length; i < numBubbles; i++) {
      const size = Math.floor(Math.random() * 50) + 20; // Tamanho aleatório entre 20 e 70
      const borderWidth = Math.floor(Math.random() * 10) + 2;
      const top = Math.random() * areaHeight; // Posição vertical aleatória dentro da área especificada
      const left = Math.random() * areaWidth; // Posição horizontal aleatória dentro da área especificada
      newBubbles.push({ id: i, size, borderWidth, top, left });
    }
    
    setBubbles(newBubbles);
  };

  useEffect(() => {
    generateRandomBubbles();
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          borderWidth={bubble.borderWidth}
          top={bubble.top}
          left={bubble.left}
        />
      ))}
    </div>
  );
};

export default BubbleContainer;
