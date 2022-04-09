import React, { Component } from 'react';
import MiEstado from './MiEstado';

class Principal extends Component {
    render() {
        return (
            <div>
                <MiEstado numero={3}/>
            </div>
        );
    }
}

export default Principal;