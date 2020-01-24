import React, {Component} from 'react';
import {render} from 'react-dom';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import '../../assets/css/Style.css';
import { orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 16,
  },
});

class Categoria1 extends Component {

    constructor() {
		super(); 
		this.state = {
            idDominio: [],
            idPregunta: [],
            nombreCategoria: "",
            nombreDominio: "",
            categorias: [],
            dominios: [] ,
            dimensiones: [] ,
            preguntas: [],
            respuestas: []

		}; 
		this.handleChange = this.handleChange.bind(this);
    }

    
    
    fetchCategorias() {
        fetch('http://localhost:3000/api/categoria/listar/5e27327a91f09e071c85810d/')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
           this.setState({categorias:data});
            //console.log(this.state.categorias+ " Categorias");
        });
    }

    getSelectStyles(name, personName, theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }

    fetchDominios() {
        fetch('/api/dominio/listar3')
        .then(res=> res.json())
        .then(data=> {
            console.log(data + "Dominios");
            this.setState({dominios:data});
            console.log(this.state.dominios + "Dominios");
        })

    }

    

    componentDidMount() {
        console.log('componente fue montado');
        this.fetchCategorias();
        this.fetchDominios();
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
  <ThemeProvider theme={theme}>
          <div className="div-encuesta">
              <h1 className='dn-id'><Typography>Categorias</Typography></h1>
          {
              this.state.categorias.map(categoria => {
                  return(
                      <div key={categoria._id}>
                          <section className="section-categoria"><Typography variant="h6">{categoria.nombreCategoria}</Typography> </section> 
                        {/*JSON.stringify(categoria.idDominio.map(dominios => dominios.nombreDominio).join("/")).replace(/['"]+/g, '')*/} <br></br>

                        {categoria.idDominio.map(dominio => {
                            return(
                                <div key={dominio._id}>
                                    <div className="section-dominio"> <div className='dn-id'> Dominio {dominio._id} </div> <Typography variant="h6">{dominio.nombreDominio} </Typography></div>
                                    {
                                        dominio.idDimension.map(dimension => {
                                            return (
                                                <div key={dimension._id}>
                                                      <div className="section-dimension"> <div className="dn-id">Dimension  {dimension._id}</div> <Typography>{dimension.nombreDimension}</Typography></div> 
                                                     {
                                                        dimension.idPreguntas.map(pregunta => {
                                                         return(
                                                             <div className="section-preguntas" key={pregunta._id}>
                                                                 <div className="dn-id">Pregunta {pregunta._id} </div><Typography variant="h6"> {pregunta.nombrePregunta}: </Typography>
                                                                 <RadioGroup  aria-label={pregunta._id} name="customized-radios">
                                                                 <FormLabel component="legend">Respuestas</FormLabel>
                                                                 {
                                                                     pregunta.idRespuestas.map( respuesta => {
                                                                         return (
                                                                             <div key={respuesta._id}>


      
      
        <FormControlLabel value={respuesta.nombreRespuesta} control={<StyledRadio />} label={respuesta.nombreRespuesta} />
        {/*<FormControlLabel
          value="disabled"
          disabled
          control={<StyledRadio />}
          label="(Disabled option)"
        />*/}
      
                                                                                {/*respuesta.nombreRespuesta*/}

                                                                             </div>
                                                                         )
                                                                     })
                                                                 }
                                                                </RadioGroup>
                                                             </div> 
                                                             
                                                         )
                                                        })
                                                    }
                                                </div>
                                               
                                            )
                                        })
                                    }
                                </div>
                            )
                        })}
                    
                        { /*JSON.stringify(categoria.idPreguntas)*/}
                          
                      </div>
                  )
              })

          }
          </div>
          </ThemeProvider>
      )
    }
}

export default Categoria1;