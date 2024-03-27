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

  const generateRandomBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < numBubbles; i++) {
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
    const interval = setInterval(generateRandomBubbles, 5000); // Gera novas bolhas a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []); // Executa apenas uma vez após a montagem do componente

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
