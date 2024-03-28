import React, { useState } from 'react';
import './MenuItens.css';
import MenuItem from './MenuItem';

function Menu() {

  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const menuItems = [
    { name: 'PENEIRA CATA-FOLHAS', image: require('../media/peneira.jpg'), texto:'Equipamento para higienização de piscinas, ideal para remoção de penas partículas no fundo da piscina e detritos da superfície'},
    { name: 'ASPIRADOR', image:require('../media/aspirador.jpg'), texto:'Equipamento para manutenção e higienização de piscinas , ideal para aspiração de piscinas de fibra alvenaria , concreto e pastilha'},
    { name: 'BOMBA 1/2 CV CONJUNTO', image: require('../media/bombaVelcro1_2.jpg'), texto:''},
    { name: 'BOMBA 1/3 CV CONJUNTO', image: require('../media/bombaVelcro1_3.jpg'), texto:''},
    { name: 'CLORADOR FLUTUANTE MARGARIDA', image: require('../media/cloradorFlutuante.jpg'), texto:'Equipamento que distribui gradualmente cloro de forma uniforme sobre a piscina conforme o tempo vai passando . Evitando a contaminação através da superfície e a proliferação de microorganismos e bactérias também prevenindo contra o surgimento de larvas e mosquitos.'},
    { name: 'ESTOJO TESTE', image: require('../media/estojoTeste.jpg'), texto:'Equipamento fundamental para manter a qualidade da água e preservar a saúde dos banhistas , capaz de medir o nível do pH da água e a concentração de cloro.'},
    { name: 'FILTRO VELCRO V40', image: require('../media/filtroVelcrov40.jpg'), texto:''},
    { name: 'FILTRO VELCRO V30', image: require('../media/filtroVelcrov30.jpg'), texto:''},
    { name: 'MANGUEIRA FLUTUANTE 1/2', image: require('../media/mangueiraFlutuante1_2.jpg'), texto:'Atua na aspiração da piscina permitindo visualizar o interior para confirmar se está funcionando sendo mais durável e prática'},
    { name: 'PONTEIRA P/ MANGUEIRA', image: require('../media/ponteira.jpg'), texto:'Conector para mangueira de 1/2 polegada  na cor azul  , funciona como adaptador ou conector para aspiração.'},
    { name: 'ADAPTADOR 1/2', image: require('../media/adaptador.jpg'), texto:'Adaptador de rosca de 1/2 polegada conectado a mangueira de aspiração'},
    { name: 'CLORO 3 EM 1', image: require('../media/cloro.jpg'), texto:'Utilizado em tratamento de piscinas, ação bactericida e auxiliar de tratamento. Possui efeitos de desinfetante, clarificante e decantador (não dispensa o uso dos demais produtos).'},
    { name: 'SULFATO DE ALUMÍNIO 2KG', image: require('../media/sulfato.jpg'), texto:'Produto especializado em decantar as impurezas na água, auxiliando no tratamento geral da piscina.'},
    { name: 'ELEVADOR DE pH', image: require('../media/barrilha.jpg'), texto:'Recomendado para elevar o pH da água , corrigindo  se estiver abaixo de 7,2 . Adicionar 20g/ m³ diluídos  previamente em um balde com água e distribuídos uniformemente'},
    { name: 'CLARIFICANTE', image: require('../media/g_clarificante.jpg'), texto:'Clarificante e auxiliar de filtração, capaz de atrair a sujeira e formar flóculos  grandes que passam a ser retidos pelo filtro  ou são decantatos  podendo ser facilmente removidos na aspiração. Recomenda-se 1,5ml/m³ por semana para auxiliar na filtração e  de 3 a 6 ml/m³ para clarificar.'},
    { name: 'ALGICIDA DE MANUTENÇÃO', image: require('../media/g_algicidamanutencao.jpg'), texto:'Fórmula criada especialmente para prevenir o desenvolvimento de algas. Recomenda-se que em uma piscina com pH da água em 7,4 e 7,6  seja aplicado de 3 a 5 ml/ m³ semanalmente .'},
    { name: 'ALGICIDA DE CHOQUE', image: require('../media/g_algicidachoque.jpg'), texto:'Formulação de complexos de íons de cobre que combate e elimina as algas ,organismos microscópicos responsáveis pela  colocação verde e turva da água , deixando o piso e as paredes escorregadias . Recomendado para qualquer tipo de piscina ( fibra , vinil azulejo e pintura) recomenda-se 7 ml/m³ sempre que necessário.'},
    { name: 'LIMPA BORDAS', image: require('../media/g_limpabordas.jpg'), texto:'Detergente biodegradável para piscinas , elimina depósitos de óleos e gorduras e não altera o pH da água. Baixa formação de espuma e aroma de citronela.'},
    { name: 'SUPER TRATAMENTO SEMANAL', image: require('../media/g_tratamentosemanal.jpg'), texto:'Agente oxidante  para águas de piscinas e SPAs  que usam cloro e necessitam de oxidação frequente . Elimina os contaminantes responsáveis pelo mau odor  na água ,previne o surgimento de cloraminas  e acaba com  gorduras e oleosidades . Além de melhorar o desempenho do cloro e permitindo a ultilização  da piscina 15 minutos após sua aplicação. Recomenda-se 400 g/40m³.'},
    { name: 'TABLETE T200', image: require('../media/g_t200.jpg'), texto:'Tricloro em tabletes concentrado, contém 90% de cloro ativo. Possui estabilizante que inibe a degradação do cloro pelos raios UV. Possui dissolução lenta para cloração contínua e automática em cloradores ou dosadores automáticos por vários dias. Recomenda-se  1 tablet para 30.000 litros ou 200 g /30m³  duração de 7 a 10 dias.'},
    { name: 'BALDE CLORO GRANULADO 10KG', image: require('../media/g_baldecloro.jpg'), texto:'Dicloro concentrado , excelente agente  desinfetante e oxidante  de rápida dissolução  , essencial para manter a qualidade da água e a saúde dos banhistas .   Sua composição química o torna mas resistente a raios UV  fazendo com que ele dure muito mais tempo  a dosagem recomendada é de 2 a 3 g/m³ e seu teor  de cloro ativo é de 56%.'},
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

