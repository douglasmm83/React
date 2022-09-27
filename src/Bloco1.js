const Bemvindo = () => {
  return(
    <div>
      <h2>Bem-vindo Douglas</h2>
    </div>
  )
}

const Bemvindo1 = (props) => {
  return(
    <div>
      <h2>Bem-vindo {props.nome} </h2>
    </div>
  )
}

function App(){
  return(
    <div>
      Olá Mundo!
      <Bemvindo/>
      <Bemvindo1 nome="Douglas"/>
      <h1>Curso de React</h1>
    </div>
  )
}

export default  App;