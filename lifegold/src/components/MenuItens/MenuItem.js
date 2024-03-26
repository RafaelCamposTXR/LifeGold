import React from 'react';
import './MenuItens.css';

function MenuItem({ name, price, image}) {
  return (
    <div className="item-menu">
      <img src={image} className="image"/>
      <div className="nome-item">
        {name}
        {price}
      </div>
      
    </div>
  );
}

export default MenuItem;