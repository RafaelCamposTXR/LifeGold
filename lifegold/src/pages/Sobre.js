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
import Slider from '../components/Slider/Slider';

function Sobre() {

  const data = [
    //{ id: '1', image: require('../components/media/g_t200.jpg')},
    { id: '2', image: require('../components/media/piscinavinil1.jpg')},
    { id: '3', image: require('../components/media/piscinavinil0.jpg')},
    //{ id: '4', image: require('../components/media/g_tratamentosemanal.jpg')},
    //{ id: '5', image: require('../components/media/g_baldecloro.jpg')},
    //{ id: '6', image: require('../components/media/g_limpabordas.jpg')},
    //{ id: '7', image: require('../components/media/g_algicidachoque.jpg')},
    //{ id: '8', image: require('../components/media/g_algicidamanutencao.jpg')},

  ]
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
              <div className='espaco-dentro-div' >
              <div className='fraseseta' >
                <FaArrowRight className="seta" />
                <div className='texto-linkado' >
                  <Link to='/produtos' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Confira os produtos disponíveis em nossa loja</Link>
                </div>
              </div>

              <div className='fraseseta' >
                <FaArrowRight className="seta" />
                <div className='texto-linkado' >
                  <Link to='/piscinas' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Confira as piscinas já produzidas pela nossa equipe e a nossa história profissional</Link>
                </div>
              </div>

              <div className='fraseseta' >
                <FaArrowRight className="seta" />
                <div className='texto-linkado' >
                  <Link to='/contato' style={{ textDecoration: 'none', color: '#4a4a4a' }}>Fale com um de nossos consultores</Link>
                </div>
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

          <div >
            <div className="linha-cinza" style={{marginTop:"80px"}}></div> {/* Adiciona a linha cinza */}
          </div>
          <div className="area-parceiros">
          <div className="texto-parceiro">
            Parceiros
          </div>
          <div className="container-logos">
            <img src={require('../components/media/AzulVinil.jpg')} className="logoParceiro" alt="logo"/>
            <img src={require('../components/media/genco.jpg')} className="logoParceiro" alt="logo"/>
            <img src={require('../components/media/VinilTec.jpg')} className="logoParceiro" alt="logo"/>
            <img src={require('../components/media/FibraTec.jpg')} className="logoParceiro" alt="logo"/>
            <img src={require('../components/media/FibraMix.jpg')} className="logoParceiro" alt="logo"/>
            <img src={require('../components/media/mondialle.jpg')} className="logoParceiro" alt="logo"/>
          </div>
          <div className='texto-menor' style={{marginLeft:"180px"}}>
              <p>Em parceria com as empresas acima, a LifeGold ampliou as possibilidades de oferta de produtos e piscinas, contribuindo para a concretização do seu sonho.</p>
            </div>
          <Slider data={data} />
          </div>
          
          <TelaContato/>

        </div>
        
    );
}

export default Sobre;