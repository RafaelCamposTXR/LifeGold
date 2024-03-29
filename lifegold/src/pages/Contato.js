import React from 'react';
import '../components/styles.css';
import BubbleContainer from '../components/Bolhas/BubbleContainer';
import TelaContato from '../components/TelaContato/TelaContato';
import Form from '../components/Formulario/Form';

function Contato() {
    return (
        <div className="Contato">
          <div>
          <div className="graybox">
                <div className="content">
                <img src={require('../components/media/logoh.png')} className="logoh" />
                </div>
            </div>
            <div>
                <Form/>
            </div>
            <div className="imagem-lateral" style={{ marginTop: '90px', zIndex: '0' }}>
                <img src={require('../components/media/piscina6.jpeg')} />
            </div>
            <BubbleContainer numBubbles={10} areaWidth={500} areaHeight={900} />
        </div>
        </div>
    );
}

export default Contato;