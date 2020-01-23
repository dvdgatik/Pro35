import React, {Component} from 'react';
import {render} from 'react-dom';


class Categoria4 extends Component {
     /*static propTypes = {
        children: PropTypes.object.isRequired
    };*/
    
    constructor() {
		super(); //heredar todas las funcionalidades del componente
		this.state = {
            idDominio: [],
            idPregunta: [],
            nombreCategoria: "",
            nombreDominio: "",
            categorias: [],           
		}; // estado de la aplicacion // cuando empieze la app todos los datos estarn en blanco
		//this.addTask = this.addTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }
    
    fetchCategorias() {
        fetch('http://localhost:3000/api/categoria/listar2')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            this.setState({categorias:data});
            console.log(this.state.categorias+ " State");
        });
    }

    

    componentDidMount() {
        console.log('componente fue montado');
        this.fetchCategorias();
    }

    handleChange(e) {
		//console.log(e.target.name);
		const { name, value } = e.target;
		this.setState({
			[name]: value
		}); //cambiar el estado de una app de react

	}

    render() {
//const {children} = this.props;
const message = "Hola";
return(
          <div>
          {
              this.state.categorias.map(categoria => {
                  return(
                      <div key={categoria._id}>
                          {categoria._id} <br></br>
                          {categoria.nombreCategoria} <br></br>
                        {JSON.stringify(categoria.idDominio.map(dominios => dominios.nombreDominio).join("")).replace(/['"]+/g, '')} <br></br>
                        { JSON.stringify(categoria.idPreguntas)}
                          
                      </div>
                  )
              })

          }
          </div>
      )
    }
}

export default Categoria4;