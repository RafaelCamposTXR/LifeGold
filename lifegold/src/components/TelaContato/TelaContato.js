import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TelaContato.css';
import img from '../media/fundoTelaContato.png';
import logo from '../media/LifeGoldlogo.png';

function TelaContato() {
  const location = useLocation();
  return(
    <div className= "contato" >

      <div className= "listaMenu">
        <div className= "texto">
          ENTRE EM CONTATO
        </div>

        <div className='texto-normal' style={{ whiteSpace: 'pre-line' }} >
          @lifegoldpiscinas {'\n'}
          (34) 3612-5203  /  (34) 99803-2462 {'\n'}
          lifegoldpiscinas@gmail.com
        </div>

      </div>
      
      <img src={logo} className="logo"/>
      
      <img src={img} className="fundo"/>
    
    </div>
  );
}

export default TelaContato;