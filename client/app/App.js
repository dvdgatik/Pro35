import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Router} from 'react-router-dom';
import Stepper from './components/Stepper';
import Login from './components/form/Login';
import Signup from './components/form/SignUp';
import Content from './components/template/Content'



class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };
    
    constructor() {
		super(); //heredar todas las funcionalidades del componente
		this.state = {
			idGuia: '',
			idSeccion: '',
			encuestas: [],
			_id: ''

		}; // estado de la aplicacion // cuando empieze la app todos los datos estarn en blanco
		//this.addTask = this.addTask.bind(this);
		//this.handleChange = this.handleChange.bind(this);
    }
    
    fetchEncuestas() {
        fetch('/api/encuestas')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            this.setState({encuestas:data});
            console.log(this.state.encuestas);
        });
    }

    componentDidMount() {
        console.log('componente fue montado');
        this.fetchEncuestas();
    }

    render() {
        const {children} = this.props;
      return(
          <div>
        <Stepper></Stepper>
        <Login></Login>

          <h1>Encuestas</h1>
          
          </div>
      )
    }
    
}

export default App;