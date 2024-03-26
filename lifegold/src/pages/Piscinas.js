import React from 'react';
import Slider from '../components/Slider/Slider';
import '../components/styles.css'

function Piscinas() {
    return (
        <div>
            <div className='graybox'>
                <div className='content'>
                    <img src={require('../components/media/logoh.png')} className="logoh" />
                </div>
            </div>
            <div style={{ marginTop: '130px' }}>
                <Slider />
            </div>
            <div style={{ marginTop: '130px', maxWidth: '600px', margin: '0 auto' }}>
                <div className='texto'>
                    <p>Confira os nossos trabalhos ao longo de nossa experiência com construção de piscinas</p>
                </div>
            </div>
            
        </div>
    );
}

export default Piscinas;