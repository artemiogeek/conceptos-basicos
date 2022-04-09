import React from 'react';
import './App.css';
import ComponentesFuncion from './components/ComponentesFuncion'
import ComponenteClase from './components/ComponentesClase'
import PropsEnFunciones from './components/PropsEnFunciones';
import PropsEnClases from './components/PropsEnClases';
import ElementosyFuncionesProps from './components/ElementosyFuncionesProps';
import PropsPorDefecto from './components/PropsPorDefecto';
import Estados from './components/Estados';



function App() {
  return (
    <div className = "App">
      <ComponenteClase/>
      <ComponentesFuncion></ComponentesFuncion>      
      <PropsEnFunciones/>
      <PropsEnClases/>
      <ElementosyFuncionesProps/>
      <PropsPorDefecto/>
      <Estados/>

    </div>
  );
}

export default App;
