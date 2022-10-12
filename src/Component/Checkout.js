import React from 'react';
import Header from './Header';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ty">
          <h1>Isso foi apenas uma simulação do meu projeto de e-commerce</h1>
          <p>Obrigado por testá-lo ! ! !</p>
          <a href="https://dihrey.netlify.app/" rel="noopener noreferrer" target="_blank">Meu Portfólio</a>
        </div>
        <div className="div-seta-check">
          <img src="https://cdn-icons-png.flaticon.com/512/20/20901.png?w=360" alt="seta" className="seta" />
          <p>Voltar Ao Início</p>
        </div>
      </div>
    );
  }
}

export default Checkout;
