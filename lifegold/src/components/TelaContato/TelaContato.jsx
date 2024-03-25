import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './TelaContato.module.css';

function TelaContato() {
  const location = useLocation();

  return (
    <div className={style.menu}>
      <ul className={style.listaMenu}>    
      </ul>
    </div>
  );
}

export default TelaContato;