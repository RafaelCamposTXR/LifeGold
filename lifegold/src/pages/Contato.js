import React from 'react';
import '../components/styles.css';
import BubbleContainer from '../components/Bolhas/BubbleContainer';
import Form from '../components/Formulario/Form';

function Contato() {
    return (
        <div className="Contato">
          <div className="graybox">
                <div className="content">
                <img src={require('../components/media/logoh.png')} className="logoh" />
                </div>
            </div>
            <div>
            <div className='texto-contato'>
                <p>Se interessou em nos contatar? Nos envie uma mensagem com seu pedido ou dúvida</p>
              </div>
                <Form/>
            </div>
            <div className="imagem-lateral" style={{ marginTop: '62px', zIndex: '0', marginLeft: '-8px' }}>
                <img src={require('../components/media/piscina1.jpeg')} />
            </div>
            <BubbleContainer numBubbles={10} areaWidth={300} areaHeight={600} />
        </div>
    );
}

export default Contato;