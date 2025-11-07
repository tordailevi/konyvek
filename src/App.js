import './App.css';
import { konyvLista } from './adat.js';
import Konyvek from './components/Konyvek.js';
import Kosar from './components/Kosar.js';
import {useState} from "react";

function App() {
  const [kosarLista, setKosarLista] = useState([])

  function kosarba(adat){
    const sl = [...kosarLista]
    sl.push(konyvLista[adat])
    setKosarLista([...sl])
    console.log(adat)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>

      <section className="kosar">
        <Kosar lista ={kosarLista}/>
      </section>

      <article>
          <Konyvek konyvLista={konyvLista} kosarbafv={kosarba}/>
      </article>
    </div>
  );
}

export default App;
