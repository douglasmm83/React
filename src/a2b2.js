import {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador = 0
        };
    }

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this setState(states);
    }

    diminuir(){
        let state = this.state;
        state.contador += 1;
        this setState(states);
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                    {this.state.nome}
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}