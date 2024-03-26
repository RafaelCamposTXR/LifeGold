import React from 'react';
import './MenuItens.css';
import MenuItem from './MenuItem.js';
import inseticida from '../media/inseticida.png'
import aspirador from '../media/aspirador.jpg'

function Menu() {
  const menuItems = [
    { name: 'Inseticida', price: 2.49, image: inseticida },
    { name: 'ASPIRADOR', price: 140, image: aspirador },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
    { name: 'Inseticida', price: 5.99, image: inseticida },
    { name: 'outra coisa', price: 2.49, image: inseticida },
    { name: 'outra coisa', price: 1.99, image: inseticida },
  ];

  return (
    <div className="menu">
      <div className="lista-menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} image ={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
