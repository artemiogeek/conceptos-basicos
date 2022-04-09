import React from 'react';
import Soldado from './Soldado';
import SoldadoClase from './SoldadoClase';

const Principal = () => {
    return (
        <div>
            <h1>Props por defecto</h1>
            <Soldado
            fullName = {{nombre: "Eduardo", apellido: "Lulichat" }}
            mayorDeEdad = {true}           
            />
            <SoldadoClase
            fullName = {{nombre: "Artemio", apellido: "Mamani" }}
            edad = {40}
            sexo = "Masculino"
            mayorDeEdad = {true}
            />
        </div>
    );
};

export default Principal;