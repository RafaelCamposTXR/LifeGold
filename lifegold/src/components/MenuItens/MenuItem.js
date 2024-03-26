import React from 'react';
import './MenuItens.css';

function MenuItem({ name, price, image}) {
  return (
    <div className="item-menu">
      <div className="nome-item">
        {name}
        {price}
        <img src={image} className="image"/>
      </div>
      
    </div>
  );
}

export default MenuItem;