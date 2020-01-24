import React, {Component} from 'react';
class Registrar extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre='David',
            apellido='Gatica'
        };
    }
    render() {
            setTimeout(() => {
                this.setState({nombre:'Esteban',apellido:'Cerillo'});
            }, 2000)
            return(
                <div></div>
            )
    }
}