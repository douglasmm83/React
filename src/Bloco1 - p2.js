const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook}/>
    </div>
  )
}

const Sobre = (props) =>{
  return(
    <div>
      <h2>Olá, meu nome é {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.fb}>Facebook</a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
    <Equipe nome="Douglas" cargo="Professor" idade="38" facebook="https://facebook.com"/>
    <Equipe nome="Gabriel" cargo="Programador" idade="26"/>
    </div>
  )
}

export default  App;