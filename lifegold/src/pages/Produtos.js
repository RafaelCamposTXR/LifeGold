import React from 'react';
import Menu from '../components/MenuItens/Menu.js';
import '../components/styles.css'


function Produtos() {
    return (
        <div className="Produtos">   
          <div className="textoPai">
            <div style={{ maxWidth: '600px'}}>
              <div className='texto'>
                <p>Confira o nosso catálogo de produtos especializados, em constante crescimento</p>
              </div>
            </div>  
          </div>   
          <Menu/>
        </div>
    );
}

export default Produtos;