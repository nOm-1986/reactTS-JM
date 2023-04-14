import React from 'react';
import Componente from './components/Componente';
import {Properties} from './components/Properties';
import './App.css';

const elArreglo = ['a',1,2,3,'b'];

function App() {
  return (
    <div className="App">
      <section>
        <Componente />
        <hr/>
        <Properties firstName="Fabian" arreglo={elArreglo} booleano={true} objeto={{nombre:'Fabian', email:'joshefbeltran@gmail.com'}}></Properties>
      </section>
    </div>
  );
}

export default App;
