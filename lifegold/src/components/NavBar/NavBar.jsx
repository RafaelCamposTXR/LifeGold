import React from 'react';
import style from './NavBar.module.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <ul className={style.listaMenu}>
          <li><a href="#sobre" className = {style.botaoNavegacao}>Sobre</a></li>
          <li><a href="#produtos" className = {style.botaoNavegacao}>Produtos</a></li>
          <li><a href="#piscinas" className = {style.botaoNavegacao}>Piscinas</a></li>
          <li><a href="#descubra" className = {style.botaoNavegacao}>Descubra</a></li>
          <li><a href="#contato" className = {style.botaoNavegacao}>Contato</a></li>
        </ul>
      </div>
    );
  }
}


export default NavBar;