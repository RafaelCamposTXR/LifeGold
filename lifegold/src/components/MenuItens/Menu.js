import React, { useState } from 'react';
import './MenuItens.css';
import MenuItem from './MenuItem';
import Popup from '../popup/Popup';

function Menu() {

  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const menuItems = [
    { name: 'PENEIRA CATA-FOLHAS', image: require('../media/peneira.jpg')},
    { name: 'ASPIRADOR', image:require('../media/aspirador.jpg')},
    { name: 'BOMBA 1/2 CV CONJUNTO', image: require('../media/bombaVelcro1_2.jpg')},
    { name: 'BOMBA 1/3 CV CONJUNTO', image: require('../media/bombaVelcro1_3.jpg')},
    { name: 'CLORADOR FLUTUANTE MARGARIDA', image: require('../media/cloradorFlutuante.jpg')},
    { name: 'ESTOJO TESTE', image: require('../media/estojoTeste.jpg')},
    { name: 'FILTRO VELCRO V40', image: require('../media/filtroVelcrov40.jpg')},
    { name: 'FILTRO VELCRO V30', image: require('../media/filtroVelcrov30.jpg')},
    { name: 'MANGUEIRA FLUTUANTE 1/2', image: require('../media/mangueiraFlutuante1_2.jpg')},
    { name: 'PONTEIRA P/ MANGUEIRA', image: require('../media/ponteira.jpg')},
    { name: 'ADAPTADOR 1/2', image: require('../media/adaptador.jpg')},
    { name: 'CLORO 3 EM 1', image: require('../media/cloro.jpg')},
    { name: 'SULFATO DE ALUMÍNIO 2KG', image: require('../media/sulfato.jpg')},
    { name: 'ELEVADOR DE pH', image: require('../media/barrilha.jpg')},
    { name: 'CLARIFICANTE', image: require('../media/g_clarificante.jpg')},
    { name: 'ALGICIDA DE MANUTENÇÃO', image: require('../media/g_algicidamanutencao.jpg')},
    { name: 'ALGICIDA DE CHOQUE', image: require('../media/g_algicidachoque.jpg')},
    { name: 'LIMPA BORDAS', image: require('../media/g_limpabordas.jpg')},
    { name: 'SUPER TRATAMENTO SEMANAL', image: require('../media/g_tratamentosemanal.jpg')},
    { name: 'TABLETE T200', image: require('../media/g_t200.jpg')},
    { name: 'BALDE CLORO GRANULADO 10KG', image: require('../media/g_baldecloro.jpg')},
  ];

  return (
    <div className="menu">
      <div className="lista-menu">
        {menuItems.map((item, index) => (
            <MenuItem key={index} name={item.name} price={item.price} image ={item.image} onItemClick={() => handleItemClick(item)}  />
        ))}
      </div>
      {selectedItem && <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}

export default Menu;
