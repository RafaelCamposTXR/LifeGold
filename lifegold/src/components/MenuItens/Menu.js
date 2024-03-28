import React, { useState } from 'react';
import './MenuItens.css';
import MenuItem from './MenuItem';

function Menu() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [        
    { name: 'PENEIRA CATA-FOLHAS', image: require('../media/peneira.jpg'), texto:'Equipamento para higienização de piscinas, ideal para remoção de penas partículas no fundo da piscina e detritos da superfície'},
    { name: 'ASPIRADOR', image:require('../media/aspirador.jpg'), texto:'Equipamento para manutenção e higienização de piscinas , ideal para aspiração de piscinas de fibra alvenaria , concreto e pastilha'},
    { name: 'BOMBA 1/2 CV CONJUNTO', image: require('../media/bombaVelcro1_2.jpg'), texto:'Produzidas com polímeros  de alta qualidade que suportam os agentes químicos de tratamento de piscinas e garantem maior robustez, desempenho e vida útil.Possuem abas incorporadas para fácil acesso à limpeza do cesto sem a necessidade do uso de chaves. Indicado para piscinas de alvenaria e fibra. Ideal para Piscinas de até: 52.000 Litros'},
    { name: 'BOMBA 1/3 CV CONJUNTO', image: require('../media/bombaVelcro1_3.jpg'), texto:''},
    { name: 'CLORADOR FLUTUANTE MARGARIDA', image: require('../media/cloradorFlutuante.jpg'), texto:''},
    { name: 'ESTOJO TESTE', image: require('../media/estojoTeste.jpg'), texto:'Equipamento fundamental para manter a qualidade da água e preservar a saúde dos banhistas , capaz de medir o nível do pH da água e a concentração de cloro.'},
    { name: 'FILTRO VELCRO V40', image: require('../media/filtroVelcrov40.jpg'), texto:''},
    { name: 'FILTRO VELCRO V30', image: require('../media/filtroVelcrov30.jpg'), texto:''},
    { name: 'MANGUEIRA FLUTUANTE 1/2', image: require('../media/mangueiraFlutuante1_2.jpg'), texto:''},
    { name: 'PONTEIRA P/ MANGUEIRA', image: require('../media/ponteira.jpg'), texto:''},
    { name: 'ADAPTADOR 1/2', image: require('../media/adaptador.jpg'), texto:''},
    { name: 'CLORO 3 EM 1', image: require('../media/cloro.jpg'), texto:'Utilizado em tratamento de piscinas, ação bactericida e auxiliar de tratamento. Possui efeitos de desinfetante, clarificante e decantador (não dispensa o uso dos demais produtos).'},
    { name: 'SULFATO DE ALUMÍNIO 2KG', image: require('../media/sulfato.jpg'), texto:'Produto especializado em decantar as impurezas na água, auxiliando no tratamento geral da piscina.'},
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
          <div className="popup-titulo">
              {selectedPiscina.name}
            </div>
            <img src={selectedPiscina.image} className="popup-img" alt={`Piscina ${selectedPiscina.id}`} />
            <p>{selectedPiscina.details}</p>
            <div className="popup-texto">
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

