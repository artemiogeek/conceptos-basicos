import React, { Component } from 'react';
import Persona from './Persona';

class Principal extends Component {
    render() {
        return (
            <div>
                <h1>Props en componentes Clase</h1>
                <Persona nombre= "Liliana" edad={27} />
                <Persona nombre= {"Ariana"} edad={17} />
                <Persona nombre= "Karina" edad={18} />
                <Persona nombre= "Luciana" edad={14} />
            </div>
        );
    }
}

export default Principal;