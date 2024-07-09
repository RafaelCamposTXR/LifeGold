import React from 'react';
import Slider from '../components/Slider/Slider';
import '../components/styles.css';
import '../components/catalogo/Catalogo';
import Catalogo from '../components/catalogo/Catalogo';
import TelaContato from '../components/TelaContato/TelaContato';

function Piscinas() {
  const data = [
    { id: '1', image: require('../components/media/piscinavinil0.jpg') },
    { id: '2', image: require('../components/media/piscinavinil1.jpg') },
    { id: '3', image: require('../components/media/piscinavinil2.jpg') },
    { id: '4', image: require('../components/media/piscinalonga3.png') },
    { id: '5', image: require('../components/media/piscinalonga2.png') },
    { id: '6', image: require('../components/media/piscinalonga1.png') },
    { id: '7', image: require('../components/media/PiscinaCarrossel3.jpg') },
    { id: '8', image: require('../components/media/PiscinaCarrossel4.jpg') },

  ]

  const piscinasAzulVinil = [
    { id: 1, image: require('../components/media/piscinavinil0.jpg'), details: 'Piscina AzulVinil' },
    { id: 2, image: require('../components/media/piscinavinil1.jpg'), details: 'Piscina AzulVinil' },
    { id: 3, image: require('../components/media/piscinavinil2.jpg'), details: 'Piscina AzulVinil' },
  ];

  const banheiras = [
    { id: 0, image: require('../components/media/banheira0.jpg'), details: 'Banheira Macerata Canto, acomodações para 3 pessoas.' },
    { id: 1, image: require('../components/media/banheira1.jpg'), details: 'Banheira Ascoli Dupla, acomodações para duas pessoas.' },
    { id: 2, image: require('../components/media/banheira2.jpg'), details: 'Banheira Macerata Dupla, desing inovador que valoriza o ambiente. Acomodações para duas pessoas.' },
    { id: 3, image: require('../components/media/banheira3.jpg'), details: 'Modelo de spa LifeGold' },
    { id: 4, image: require('../components/media/banheira4.jpg'), details: 'Modelo de spa LifeGold' },
    { id: 5, image: require('../components/media/banheira5.jpg'), details: 'Spa Evolution, oferece inúmeros benefícios como a valorização do ambiente e do imóvel além  de melhorar a qualidade de vida dos seus usuários ajudando no relaxamento muscular e psicológico.' },
  ];

  const piscinas = [
    { id: 4, image: require('../components/media/piscina1.jpeg'), details: 'Piscina AzulVinil' },
    { id: 5, image: require('../components/media/piscina2.jpeg'), details: 'Piscina ornamental com deck de madeira' },
    { id: 6, image: require('../components/media/piscina3.jpeg'), details: 'SPA em alvenaria com acabamento em cimento diamond azul royal.' },
    { id: 7, image: require('../components/media/piscina4.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 8, image: require('../components/media/piscina5.jpeg'), details: 'Piscina personalizada com iluminação LED' },
    { id: 9, image: require('../components/media/piscina6.jpeg'), details: 'Banheira com jatos de hidromassagem' },
    { id: 10, image: require('../components/media/piscina7.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 11, image: require('../components/media/piscina8.jpeg'), details: 'Banheira com jatos de hidromassagem' },
    { id: 12, image: require('../components/media/piscina9.jpeg'), details: 'Banheira com acabamento em madeira' },
    { id: 13, image: require('../components/media/piscina10.jpeg'), details: 'Piscina com iluminação LED e deck de madeira' },
    { id: 14, image: require('../components/media/piscina11.jpeg'), details: 'Piscina em pastilha com espelho d´água e spa acoplado.' },
    { id: 15, image: require('../components/media/piscina12.jpeg'), details: 'Piscina com iluminação LED e deck de madeira' },
    { id: 16, image: require('../components/media/piscina13.jpeg'), details: 'Piscina  de pastilha com deck de madeira' },
    { id: 17, image: require('../components/media/piscina14.jpeg'), details: 'Piscina em cimento liso branco Diamond.' },
    { id: 18, image: require('../components/media/piscina15.jpeg'), details: 'Piscina de vinil com iluminação LED' },
    { id: 19, image: require('../components/media/piscina16.jpeg'), details: 'Piscina acoplada com SPA, vinil e iluminação LED' },
    { id: 20, image: require('../components/media/piscina17.jpeg'), details: 'Spa em alvenaria  revestido por vinil , comporta 6 pessoas' },
    { id: 21, image: require('../components/media/piscina18.jpeg'), details: 'Spa de vinil com deck de madeira e jatos de hidromassagem' },

  ];

    return (
        <div>
            <div className='graybox'>
                <div className='content'>
                    <img src={require('../components/media/logoh.png')} className="logoh" alt="" />
                </div>
            </div>

            <div style={{ marginTop: '130px' }}>
                <Slider data={data} />
            </div>

            <div style={{ marginTop: '130px', maxWidth: '600px', margin: '0 auto' }}>
                <div className='texto-produto'>
                    <p>Confira os nossos trabalhos ao longo de nossa experiência com construção de piscinas</p>
                </div>
            </div>
            
            <div >
                <div className="linha-cinza"></div> {/* Adiciona a linha cinza */}
            </div>

            <div style={{ marginTop: '70px' }}>
                <Catalogo piscinas={piscinas} />
            </div>
              <div >
                <div className="linha-cinza" style={{marginTop:"80px"}}></div> {/* Adiciona a linha cinza */}
              </div>
              <div style={{ marginTop: '70px' }}>
              <div className='logoParceiroPai'>
              <img className='logoParceiro' src={require('../components/media/mondialle.jpg')}  alt="" />
              </div>
                <Catalogo piscinas={banheiras} />
              </div>
            <div>
                <div className="linha-cinza" style={{marginTop:"80px"}}></div> {/* Adiciona a linha cinza */}
            </div>
            <div style={{ marginTop: '70px'}}>
            <div className='logoParceiroPai'>
                    <img className='logoParceiro' src={require('../components/media/AzulVinil.jpg')}  alt="" />
                </div>
                <Catalogo piscinas={piscinasAzulVinil} AzulVinil />
            </div>

            <div style={{ marginTop: '100px' }}>
            </div>

            <TelaContato/>            
        </div>
    );
}

export default Piscinas;