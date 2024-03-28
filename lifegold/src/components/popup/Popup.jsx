import React from 'react';
import './Popup.css';

function Popup({ item, props }) {
  return (props.trigger) ? (
      <div className="popup-container">
      <div className="popup-content">
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <button>Fechar</button>
      </div>
    </div>
  ) : "";
}

export default Popup;
