import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Encuesta1 from './Encuesta1';
import Categoria1 from './Categoria1';
import Categoria2 from './Categoria2';
import Categoria3 from './Categoria3';
import Categoria4 from './Categoria4';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Ambiente de Trabajo', 'Factores propios de la actividad', 'Organizacion del tiempo de trabajo','Liderazgo y relaciones en el trabajo'];
}

function GetStepContent(props) {
    
  switch (props.activeStep) {
    case 0:
      return(
          <Categoria1/>
      );
      
    case 1:
      return(
          <Categoria2/>
      );
    case 2:
      return (
          <Categoria3/>
      )
    case 3: 
        return (
            <Categoria4/>
        )
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {

  const [respuestasc , setRespuestas] = React.useState('');
  const [idGuia, setIdGuia] = React.useState('test2');
  const [idEmpleado, setEmpleado] = React.useState('5e28e7d2b7322430dc052716')
  const [idPeriodo, setPeriodo] = React.useState('5e28d918eed21a15e06b3dec')


  const submit = e => {
    let respuestasc = JSON.parse(localStorage.getItem('respuestas'))
    e.preventDefault()   
     fetch('http://localhost:3000/api/encuestaC/guardar', {
      method: 'POST',
      body: JSON.stringify({      
        idEmpleado,
        idGuia,
        idPeriodo,
        respuestasc,
      }),
      headers: {
				'Accept': 'application/json',
				'content-type':'application/json'
			}
    }).then(alert(respuestasc))
    .catch(err => console.log(err))
  }

  console.log(submit)

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <form className={classes.form} onSubmit={submit} noValidate>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Encuesta Terminada</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <GetStepContent activeStep={activeStep} />
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atras
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
              </Button>
              <button  className={classes.submit} type="submit">Guardar</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </form>
  );
}
