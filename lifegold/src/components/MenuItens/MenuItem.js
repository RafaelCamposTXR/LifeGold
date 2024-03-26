import React from 'react';
import '../styles.css';

function MenuItem({ name, price, image}) {
  return (
    <div className="item-menu">
      <div className="nome-item">{name}</div>
      <div className="preco-item">${price}</div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <img src={image} className="image"/>
    </div>
  );
}

export default MenuItem;