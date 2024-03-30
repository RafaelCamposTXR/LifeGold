import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../components/media/LifeGold.png';
import fundoCentral from '../components/media/FundoSubtitulo.png';
import porqueGeralPC from '../components/media/PorqueGeralPC.png';
import porqueGeralMobile from '../components/media/PorqueGeralMobile.png';
import IndicaPiscina from '../components/media/IndicaPiscina.png';
import IrPiscina from '../components/media/IrPiscinas.png';
import '../components/styles.css';
import TelaContato from '../components/TelaContato/TelaContato';
import BubbleContainer from '../components/Bolhas/BubbleContainer';

function Sobre() {
    return (
        <div className="Sobre">
          <header className="App-header">

            <img src={logo} className="App-logo" style={{ width: '32%' }} alt="logo" />
            <img src={fundoCentral} className="App-logo" style={{ width: '60%' }} alt="logo" />

            <img src={porqueGeralPC} className="PorqueGeralPC" style={{ marginTop: '70px' }} alt="logo"/>

            <BubbleContainer numBubbles={10} areaWidth={1400} areaHeight={900} />

            <img src={porqueGeralMobile} className="PorqueGeralMobile" alt="logo"/>

            <div className='texto-menor'>
              <p>Fundada por Tiago Augusto, profissional com mais de 20 anos de experiência na área de construção e venda de piscinas, a LifeGold já produziu e vendeu mais de 300 piscinas. Acompanhamos você do início ao fim da construção, para que você possa ter profissionais qualificados e certificados na área, sempre à disposição para tornar seu sonho realidade</p>
            </div>

            <div className='divisoria-cinza' >
    
              <div className='fraseseta' style={{marginTop:'50px'}} >
                <FaArrowRight style={{ color: '#4a4a4a' }} />
                <div className='texto-linkado' >
                  <Link to='/produtos' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Confira os produtos disponíveis em nossa loja</Link>
                </div>
              </div>

              <div className='fraseseta' >
                <FaArrowRight className="seta-piscina" style={{ color: '#4a4a4a'}} />
                <div className='texto-linkado' >
                  <Link to='/piscinas' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Confira as piscinas já produzidas pela nossa equipe, e o nossa história profissional</Link>
                </div>
              </div>

              <div className='fraseseta' >
                <FaArrowRight className="seta-consultor" style={{ color: '#4a4a4a' }} />
                <div className='texto-linkado' >
                  <Link to='/contato' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Fale com um de nossos consultores</Link>
                </div>
              </div>

            </div>

            <img src={IndicaPiscina} className="PorqueGeralPC" alt="logo"/>

            <Link to='/piscinas'>
              <img src={IrPiscina} className="PorqueGeralPC" alt="logo"/>
            </Link>

            <img src={IndicaPiscina} className="PorqueGeralMobile" alt="logo"/>

            <Link to='/piscinas'>
              <img src={IrPiscina} className="PorqueGeralMobile" alt="logo"/>
            </Link>
              
          </header>

          <div className ="App"></div>
          
          <TelaContato/>

        </div>
        
    );
}

export default Sobre;