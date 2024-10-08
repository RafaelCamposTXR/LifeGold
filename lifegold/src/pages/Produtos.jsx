import React from 'react';
import Menu from '../components/MenuItens/Menu.js';
import '../components/styles.css'
import TelaContato from '../components/TelaContato/TelaContato.js';

function Produtos() {
    return (
        <div className="Produtos">
          <div className="graybox">
            <div className="content">
              <img src={require('../components/media/logoh.png')} className="logoh" />
            </div>
            </div>
          <div className="textoPai">
            <div style={{ marginTop: '6vh', maxWidth: '600px'}}>
            <div className='texto-produto'>
                <p>Confira o nosso catálogo de produtos especializados, em constante crescimento</p>
              </div>
            </div>  
          </div>
          <Menu/>
          <div>
          <TelaContato/>
          </div>
        </div>
    );
}

export default Produtos;