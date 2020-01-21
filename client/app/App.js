import React, {Component} from 'react';
import Stepper from './components/Stepper';
import Login from './components/form/Login';


class App extends Component {
    
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
      return(
          <div>
        <Stepper></Stepper>
        <Login></Login>

          <h1>Encuestas</h1>
          {
              this.state.encuestas.map(encuesta => {
                  return(
                      <div key={encuesta._id}>
                          <div>
                             Guia: {encuesta.idGuia}
                          </div>
                          <div>
                              Seccion: {encuesta.idSeccion}
                          </div>
                          <div>

                          </div>
                      </div>
                  )
              })
          }
          </div>
      )
    }
    
}

export default App;