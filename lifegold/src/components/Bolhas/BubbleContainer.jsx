import React, { useState, useEffect } from 'react';
import './Bubble.css';

const Bubble = ({ size, borderWidth, top, left }) => {
  return (
    <div
      className="bubble"
      style={{
        width: size,
        height: size,
        borderWidth: borderWidth,
        top,
        left
      }}
    ></div>
  );
};

const BubbleContainer = ({ numBubbles }) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateRandomBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < numBubbles; i++) {
        const size = Math.floor(Math.random() * 50) + 20;
        const borderWidth = Math.floor(Math.random() * 10) + 2;
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        newBubbles.push({ id: i, size, borderWidth, top, left });
      }
      setBubbles(newBubbles);
    };

    generateRandomBubbles(); // Gera bolhas iniciais
    const interval = setInterval(() => {
      generateRandomBubbles(); // Gera novas bolhas a cada 5 segundos
    }, 5000);
    
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [numBubbles]);

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
