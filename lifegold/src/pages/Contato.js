import React from 'react';
import '../components/styles.css';

function Contato() {
    return (
        <div className="Contato">
            <div className="graybox">
                <div className="content">
                    <img src={require('../components/media/logoh.png')} className="logoh" />
                </div>
            </div>

            <div className="imagem-lateral" style={{ marginTop: '90px' }}>
                <img src={require('../components/media/piscinalonga3.png')} />
            </div>
        </div>
    );
}

export default Contato;