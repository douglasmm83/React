import { useState } from 'react'
import { db } from './firebaseConnection';
import { collection, addDoc } from 'firebase/firestore'

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function cadastrarPost(){
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      setAutor('');
      setTitulo('')
    })
    .catch((error) => {
      console.log("ERRO " + error)
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1>

    <div className="container">
      <label>Titulo:</label>
      <textarea 
        type="text"
        placeholder='Digite o titulo'
        value={titulo}
        onChange={ (e) => setTitulo(e.target.value) }
      />

      <label>Autor:</label>
      <input 
        type="text" 
        placeholder="Autor do post"
        value={autor}
        onChange={(e) => setAutor(e.target.value) }
      />

      <button onClick={cadastrarPost}>Cadastrar</button>
    </div>

    </div>
  );
}

export default App;
