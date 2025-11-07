import './App.css';
import Konyvek from './components/Konyvek.js';
import Kosar from './components/Kosar.js';
import { KosarContext } from './contexts/KosarContext.js';
import { useContext } from "react";


function App() {

  const {kosarLista, konyvLista} = useContext(KosarContext) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>

      <section className="kosar">
        <Kosar lista ={kosarLista}/>
      </section>

      <article>
          <Konyvek konyvLista={konyvLista}/>
      </article>
    </div>
  );
}

export default App;
