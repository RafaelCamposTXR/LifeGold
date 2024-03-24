import React from 'react';
import style from './NavBar.module.css'

class NavBar extends React.Component {
  render() {
    return (
      <div style={styles.menu}>
        <ul style={styles.listaMenu}>
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

const styles = {
  menu: {
    backgroundColor: '#333',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  listaMenu: {
    listStyleType: 'none',
    margin: 25,
    padding: 0,
    display: 'flex',
  },
  itemMenu: {
    marginLeft: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default NavBar;