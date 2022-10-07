import { useState } from 'react'
import { auth } from './firebaseConnection';

import { 
  createUserWithEmailAndPassword
} from 'firebase/auth'

import './app.css';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function novoUsuario(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      console.log("CADASTRADO COM SUCESSO!")
    
      setEmail('')
      setSenha('')
    })
    .catch((error) => {
      
      if(error.code === 'auth/weak-password'){
        alert("Senha muito fraca.")
      }else if(error.code === 'auth/email-already-in-use'){
        alert("Email já existe!")
      }

    })
  }

  return (
    <div>
      <h1>Cadastro de usuário</h1>

    <div className="container">
      <h2>Usuarios</h2>

      <label>Email</label>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Digite um email"
      /> <br/>

      <label>Senha</label>
      <input 
        value={senha}
        onChange={(e) => setSenha(e.target.value)} 
        placeholder="Informe sua senha"
      /> <br/> 

      <button onClick={novoUsuario}>Cadastrar</button>     
    </div>

    </div>
  );
}

export default App;
