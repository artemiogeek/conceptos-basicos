import React from 'react';
import Estudiante from './Estudiante';

const Principal = () => {

        const sumaNotas = (notasAlumnos) => notasAlumnos.reduce((a,i) => a+i);

    return (
        <div>
            <h1>Elementos y Funciones como Props</h1>
            <Estudiante titulo={<h3>Soy el componente estudiante</h3>} 
            nombre="Eduardo" 
            notas={[10,16,11]}
            suma= {sumaNotas}
            />
        </div>
    );
};

export default Principal;