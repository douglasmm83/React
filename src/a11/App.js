import { useState } from 'react';
import Alunos from './components/Alunos';

function App() {
  const [nomeAluno, setNomeAluno] = useState('Douglas');


  return (
    <div>
      <h1>ESCOLA</h1>
      <hr/>

      <Alunos nome={nomeAluno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default App;
