import { useState } from 'react'
import { db } from './firebaseConnection';
import { collection, addDoc, getDocs } from 'firebase/firestore'

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  async function cadastrarPost(){
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      setAutor('');
      setTitulo('')
    })
    .catch((error) => {
      console.log("ERRO " + error)
    })
  }

  async function buscarPosts(){
    const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })

      setPosts(lista);

    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR")
    })
  }

  return (
    <div>
      <h1>Firebase com ReactJS</h1>

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
      <button onClick={buscarPosts}>Buscar posts</button>

      <ol>
        {posts.map( (post) => {
          return(
            <li key={post.id}>
              <span>Titulo: {post.titulo} </span> <br/>
              <span>Autor: {post.autor}</span> <br/>  <br/>
            </li>
          )
        })}
      </ol>

    </div>

    </div>
  );
}

export default App;
