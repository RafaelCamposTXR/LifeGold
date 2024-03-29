import React from 'react';
import TelaContato from '../components/TelaContato/TelaContato';
import MenuEquipe from '../components/MenuEquipe/MenuEquipe'

function Descubra() {
    return (
        <div className="Descubra">
            
            <div className='graybox'>
                <div className='content'>
                    <img src={require('../components/media/logoh.png')} className="logoh" />
                </div>
            </div>
            <MenuEquipe/>
            <TelaContato/>
        </div>
    );
}

export default Descubra;