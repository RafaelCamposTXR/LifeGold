import React from 'react';

class MenuTopo extends React.Component {
  render() {
    return (
      <div style={styles.menu}>
        <ul style={styles.listaMenu}>
          <li style={styles.itemMenu}><a href="#produtos">Produtos</a></li>
          <li style={styles.itemMenu}><a href="#piscinas">Piscinas</a></li>
          <li style={styles.itemMenu}><a href="#descubra">Descubra</a></li>
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

export default MenuTopo;