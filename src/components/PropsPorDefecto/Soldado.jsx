import React from 'react';

const Soldado = (props) => {

    const {fullName, mayorDeEdad, edad} = props

    return (
        <div>
            <p>Nombre completo: {fullName.nombre}  {fullName.apellido}</p>
            <p>edad: {edad}</p>
            <p>
                usted {mayorDeEdad? "esta listo para servir": "no esta listo para servir"}
            </p>
        </div>
    );
};

Soldado.defaultProps = {
    fullName: {
        nombre: "Aqui va un nombre",
        apellido: "Aqui va un apellio",
    },
    edad: 20,
    mayorDeEdad: false

}

export default Soldado;