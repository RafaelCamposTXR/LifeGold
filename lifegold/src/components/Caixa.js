import React from 'react';

class Caixa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: 'Barra de Menu',
    };
  }

  render() {
    const estiloCaixa = {
      border: '2px solid #333',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor:'#f4f7f4',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    // Estilo para o título da caixa
    const estiloTitulo = {
      fontSize: '1.5rem',
      marginBottom: '10px',
    };

    return (
      <div style={estiloCaixa}>
        <h2 style={estiloTitulo}>{this.props.titulo}</h2>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export default Caixa;
