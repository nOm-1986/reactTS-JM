import React from 'react';
import {Componente} from './components/Componente';
import {Properties} from './components/Properties';
import {RenderizadoCondicional} from './components/RenderizadoCondicional';
import { RenderizadoElemento } from './components/RenderizadoElemento';
import './App.css';
import { ContadorHooks } from './components/ContadorHooks';
//import { ScrollHooks } from './components/ScrollHooks';
import CicloVida from './components/CicloDeVida';
import { RelojHooks } from './components/RelojHooks';
import { UseEffectHook } from './components/UseEffectHook';
import { CicloVidaFetch } from './components/CicloVidaFetch';

const elArreglo = ['a',1,2,3,'b','4'];

function App() {
  return (
    <div className="App">
      {/* <section>
        
        <hr />
        <Componente />
        <hr/>
        <Properties 
          firstName="Fabian" 
          arreglo={elArreglo} 
          booleano={true} 
          objeto={{nombre:'Fabian', email:'joshefbeltran@gmail.com'}}
          elementoReact = {<i>Esto es un elemento react</i>}
          funcion={(num:number) => num*num}
          componenteReact = {<Componente/>}
        />
        <hr />
        <CicloVida />
        <hr />
        <RenderizadoCondicional/>
        <hr />
        <RenderizadoElemento/>
        <hr />
        <ContadorHooks titulo='Seguidores'></ContadorHooks>
        <hr />
        <RelojHooks/>
        <hr />
        <UseEffectHook></UseEffectHook>
        <br/>
        <br/>
        <CicloVidaFetch></CicloVidaFetch>
      </section> */}
      
    </div>
  );
}

export default App;
