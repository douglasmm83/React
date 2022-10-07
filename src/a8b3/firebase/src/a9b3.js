import { useState, useEffect } from 'react'
import { db } from './firebaseConnection';
import { 
  doc,
  collection, 
  addDoc,
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
  
        setPosts(listaPost);
      })
    }

    loadPosts();
  }, [])

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

  async function editarPost(){
    const docRef = doc(db, "posts", idPost)
    
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("POST ATUALIZADO!")
      setIdPost('')
      setTitulo('')
      setAutor('')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function excluirPost(id){
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() =>{
      alert("POST DELETADO COM SUCESSO!")
    })

  }

  return (
    <div>
      <h1>Firebase com ReactJS</h1>

    <div className="container">

      <label>ID do Post:</label>
      <input
        placeholder='Digite o ID do post'
        value={idPost}
        onChange={ (e) => setIdPost(e.target.value) }
      /> <br/>

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
      <button onClick={buscarPosts}>Buscar post</button> <br/>
      <button onClick={editarPost}>Atualizar post</button>

      <ol>
        {posts.map( (post) => {
          return(
            <li key={post.id}>
              <strong>ID: {post.id}</strong> <br/>
              <span>Titulo: {post.titulo} </span> <br/>
              <span>Autor: {post.autor}</span> <br/> 
              <button onClick={ () => excluirPost(post.id) }>Excluir</button> <br/> <br/>
            </li>
          )
        })}
      </ol>
    </div>
    </div>
  );
}

export default App;
