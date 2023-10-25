import React, {Component} from "react";

class Aula2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "adicionar", 
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);

}
aumentar(){
    let state = this.state;
    this.state.contador += 1;
    state.nome = state.contador === 0 ?
     "adicionar" : "Adicionou mais um item";
    this.setState(state);

}
diminuir(){
    let state = this.state;
    if(state.contador === 0){
        alert('Opa chegou a zero!!');
        return;
    }

    this.state.contador -= 1;
    state.nome = state.contador === 0 ?
     "adicionar" : "Remover mais um item";
    this.setState(state);

}



render() {
    return (
      <div id="container"> 
        <h1>Contador</h1>
        {this.state.nome}
        <h2>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h2>
      </div>
    );
  }
}
export default Aula2;