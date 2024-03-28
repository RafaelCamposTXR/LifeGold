import React from 'react';
import './Popup.css';

function Popup({ item, onClose }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Popup;
