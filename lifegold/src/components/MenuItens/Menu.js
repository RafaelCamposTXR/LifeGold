import React, { useState } from 'react';
import './MenuItens.css';
import MenuItem from './MenuItem';

function Menu() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [
    { name: 'PENEIRA CATA-FOLHAS', image: require('../media/peneira.jpg'), texto:''},
    { name: 'ASPIRADOR', image:require('../media/aspirador.jpg'), texto:''},
    { name: 'BOMBA 1/2 CV CONJUNTO', image: require('../media/bombaVelcro1_2.jpg'), texto:''},
    { name: 'BOMBA 1/3 CV CONJUNTO', image: require('../media/bombaVelcro1_3.jpg'), texto:''},
    { name: 'CLORADOR FLUTUANTE MARGARIDA', image: require('../media/cloradorFlutuante.jpg'), texto:''},
    { name: 'ESTOJO TESTE', image: require('../media/estojoTeste.jpg'), texto:'Equipamento fundamental para manter a qualidade da água e preservar a saúde dos banhistas , capaz de medir o nível do pH da água e a concentração de cloro'},
    { name: 'FILTRO VELCRO V40', image: require('../media/filtroVelcrov40.jpg'), texto:''},
    { name: 'FILTRO VELCRO V30', image: require('../media/filtroVelcrov30.jpg'), texto:''},
    { name: 'MANGUEIRA FLUTUANTE 1/2', image: require('../media/mangueiraFlutuante1_2.jpg'), texto:''},
    { name: 'PONTEIRA P/ MANGUEIRA', image: require('../media/ponteira.jpg'), texto:''},
    { name: 'ADAPTADOR 1/2', image: require('../media/adaptador.jpg'), texto:''},
    { name: 'CLORO 3 EM 1', image: require('../media/cloro.jpg'), texto:''},
    { name: 'SULFATO DE ALUMÍNIO 2KG', image: require('../media/sulfato.jpg'), texto:''},
    { name: 'ELEVADOR DE pH', image: require('../media/barrilha.jpg'), texto:''},
    { name: 'CLARIFICANTE', image: require('../media/g_clarificante.jpg'), texto:''},
    { name: 'ALGICIDA DE MANUTENÇÃO', image: require('../media/g_algicidamanutencao.jpg'), texto:''},
    { name: 'ALGICIDA DE CHOQUE', image: require('../media/g_algicidachoque.jpg'), texto:''},
    { name: 'LIMPA BORDAS', image: require('../media/g_limpabordas.jpg'), texto:''},
    { name: 'SUPER TRATAMENTO SEMANAL', image: require('../media/g_tratamentosemanal.jpg'), texto:''},
    { name: 'TABLETE T200', image: require('../media/g_t200.jpg'), texto:''},
    { name: 'BALDE CLORO GRANULADO 10KG', image: require('../media/g_baldecloro.jpg'), texto:''},
  ];

  const openDetails = (item) => {
    setSelectedPiscina(item);
  };

  const closeDetails = () => {
    setSelectedPiscina(null);
  };

  return (
    <div className="menu">
      <div className="lista-menu">
        {menuItems.map((item) => (
          <div className="item-menu" onClick={() => openDetails(item)} >
          <img src={item.image} className="image" alt=""/>
          <div className="overlay">
            <p>Ver detalhes</p>
          </div>
          <div className="nome-item">
            {item.name}
          </div>
        </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="popup-container">
          <div className="popup-content">
            <img src={selectedPiscina.image} className="popup-img" alt={`Piscina ${selectedPiscina.id}`} />
            <p>{selectedPiscina.details}</p>
            <div className="texto">
              {selectedPiscina.texto}
            </div>
            <button onClick={closeDetails}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;

