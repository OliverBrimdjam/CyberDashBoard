import React, { Component } from "react";

class Teste extends Component {
  render() {
    const { propost } = this.props;
    console.log(this.props.propost.name);

    return <div>{this.props.propost.name}</div>;
  }
}

export default Teste;

// --verificar estado de saúde do personagem e
// aplicar penalidades cabíveis
// --somar o dano sofrido
// --fazer teste de save
// --verificar efeito hoolywoodiano de knockout
//
