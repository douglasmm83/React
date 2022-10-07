import {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: 1
    };
  }

  render(){
    return(
      <div>
        {this.state.status === 1 &&
          <div>
            <h1>Bem-vindo ao sistema!</h1>
          </div>
        }

        <div>
          <h2>Curso React</h2>
        </div>
        
        
      </div>
    );
  }
}

export default  App;