import {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "Douglas"
        };
    }

  render(){
    return(
      <div>
        {this.state.nome}
      </div>
    );
  }
}