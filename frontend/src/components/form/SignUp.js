import React, { useState }  from 'react';
import {Avatar, Button, CssBaseline,TextField, FormControlLabel, MenuItem, Checkbox, InputLabel, Link, Grid, Box, Typography, Container} from '@material-ui/core'
import { useForm } from "react-hook-form";

import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import RadioGroup from '@material-ui/core/RadioGroup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Header from '../template/Header';
//import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useRadioStyles = makeStyles({
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

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useRadioStyles();

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


export default function SignUp() {
  const theme = useTheme();
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  
  const [nombre, setNombre] = useState('');
  const [paterno, setPaterno] = useState('');
  const [materno, setMaterno] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [edoCivil, setEdoCivil] = React.useState('');
  const [nivelEstudiosSF, setNivelEstudiosSF] = useState('');
  const [nivelEstudiosP, setNivelEstudiosP] = useState('');
  const [nivelEstudiosS, setNivelEstudiosS] = useState('');
  const [nivelEstudiosB, setNivelEstudiosB] = useState('');
  const [nivelEstudiosTS, setNivelEstudiosTS] = useState('');
  const [nivelEstudiosL, setNivelEstudiosL] = useState('');
  const [nivelEstudiosM, setNivelEstudiosM] = useState('');
  const [nivelEstudiosD, setNivelEstudiosD] = useState('');
  const [profesion, setProfesion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [tipoPuesto, setTipoPuesto] = useState('');
  const [tipoContratacion, setTipoContratacion] = useState('');
  const [tipoPersonal, setTipoPersonal] = useState('');
  const [tipoJornada, setTipoJornada] = useState('');
  const [rolarTurnos, setRolarTurnos] =  React.useState(true);
  const [expPuestoActual, setExpPuestoActual] = useState(0);
  const [email, setEmail] = useState('');
  const [expTotal, setExpTotal] = useState('');
  const [usuario, setUsuario] = useState('');
  const [perfil, setPerfil] = useState('');
  const [passTemp, setPassTemp] = useState('');
  const [fstLogin, setFstLogin] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const thankYouMessage = <p>Tank you for Your input!</p>
  const from = <form>...</form>

 
  const handleChange = event => {
    {/*setPersonName(event.target.value);
    setEdoCivil(event.target.value);
    setNivelEstudiosSF(event.target.checked);
    setEdoCivil(event.target.value);
    setTipoPuesto(event.target.value);
    setTipoContratacion(event.target.value);
    setTipoPersonal(event.target.value);
    setTipoJornada(event.target.value);
    setExpPuestoActual(event.target.value)
    setExpTotal(event.target.value)
    */}
  };

  const submit = e => {
    let fstLogin = true
    e.preventDefault()   
     fetch('http://localhost:3000/api/empleado/guardar', {
      method: 'POST',
      body: JSON.stringify({
        nombre,
        paterno,
        materno,
        sexo,
        edad,
        edoCivil,
        nivelEstudiosSF,
        nivelEstudiosP,
        nivelEstudiosS,
        nivelEstudiosB,
        nivelEstudiosTS,
        nivelEstudiosL,
        nivelEstudiosM,
        nivelEstudiosD,
        profesion,
        departamento,
        tipoPuesto,
        tipoContratacion,
        tipoPersonal,
        tipoJornada,
        rolarTurnos,
        expPuestoActual,
        expTotal,
        email,
        perfil,
        usuario,
        passTemp,
        fstLogin 
      }),
      headers: {
				'Accept': 'application/json',
				'content-type':'application/json'
			}
    }).then(window.location.href = "/home")
    .catch(err => console.log(err))
  }

  console.log(submit)


  
  
  return (
    <div>
          <Header></Header>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
        Información del trabajador      
        </Typography>
        <form className={classes.form} onSubmit={submit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                autoFocus
              />  
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="usuario"
                variant="outlined"
                required
                fullWidth
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                id="usuario"
                label="Usuario"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="app_paterno"
                variant="outlined"
                required
                fullWidth
                value={paterno}
                onChange={e => setPaterno(e.target.value)}
                id="app_paterno"
                label="Apellido Paterno"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="app_materno"
                label="Apellido Materno"
                name="app_materno"
                autoComplete="lname"
                value={materno}
                onChange={e => setMaterno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              id="edad"
              name="edad"
              label="Edad"
              value={edad}
              type="number"
              onChange={e => setEdad(e.target.valueAsNumber)}
              InputLabelProps={{
               shrink: true,
              }}
        />
            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Estado Civil</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={edoCivil}
              onChange={e => setEdoCivil(e.target.value)}
            >
              <MenuItem value="Casado">Casado</MenuItem>
              <MenuItem value="Soltero">Soltero</MenuItem>
              <MenuItem value="Unión Libre">Unión Libre</MenuItem>
              <MenuItem value="Unión Libre">Divorciado</MenuItem>
              <MenuItem value="Unión Libre">Viudo</MenuItem>
            </Select>
        </FormControl>
       
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup defaultValue={sexo} aria-label="sexo" name="customized-radios">
        <FormControlLabel value="h"  onChange={e => setSexo(e.target.value)} control={<StyledRadio />} label="Hombre" />
        <FormControlLabel value="m"  onChange={e => setSexo(e.target.value)} control={<StyledRadio />} label="Mujer" />
      </RadioGroup>
              
            </Grid>
           
            <Grid item xs={12}>
            <FormLabel component="legend"><Typography component="h2" variant="h5" align="center">Nivel de Estudios</Typography> </FormLabel>
            <hr></hr>
            </Grid>
            <Grid item xs={4}>
              <Typography>Sin Formación</Typography>
              <Checkbox
                checked={nivelEstudiosSF}
                onChange={e => setNivelEstudiosSF(e.target.checked)}
                value="Sin Formación"            
            />
            </Grid>
            
            <Grid   item xs={4}>
            <FormLabel  component="legend">Primaría</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosP} aria-label="primaria" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosP(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosP(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>

            <Grid item xs={4}>
            <FormLabel component="legend">Secundaría</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosS} aria-label="secundaria" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosS(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosS(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Preparatoria o Bachillerato</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosB} aria-label="preparatoria" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosB(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosB(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Técnico Superior</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosTS} aria-label="TS" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosTS(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosTS(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>

            <Grid item xs={4}>
            <FormLabel component="legend">Licenciatura</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosL} aria-label="L" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosL(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosL(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>

            <Grid item xs={4}>
            <FormLabel component="legend">Maestría</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosM} aria-label="M" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosM(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosM(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>

            <Grid item xs={4}>
            <FormLabel component="legend">Doctorado</FormLabel>

            <RadioGroup defaultValue={nivelEstudiosD} aria-label="D" name="customized-radios">
        <FormControlLabel value="Terminada"  onChange={e => setNivelEstudiosD(e.target.value)} control={<StyledRadio />} label="Terminada" />
        <FormControlLabel value="Incompleta"  onChange={e => setNivelEstudiosD(e.target.value)} control={<StyledRadio />} label="Incompleta" />
      </RadioGroup>
          
            </Grid>
            <Grid item xs={12}>
            <FormLabel component="legend"><Typography align="center" component="h2" variant="h5">Datos Laborales:</Typography> </FormLabel>
            <hr></hr>
            </Grid>
          

            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="profesion"
                variant="outlined"
                required
                fullWidth
                value={profesion}
                onChange={e => setProfesion(e.target.value)}
                id="profesion"
                label="Ocupación/Profesión/Puesto"
                autoFocus
              />
            </Grid>


            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="departamento"
                variant="outlined"
                required
                fullWidth
                value={departamento}
                onChange={e => setDepartamento(e.target.value)}
                id="departamento"
                label="Departamento/Sección/Area"
                autoFocus
              />
            </Grid>

            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Puesto</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="tipo_puesto"
              value={tipoPuesto}
              onChange={e => setTipoPuesto(e.target.value)}
            >
              <MenuItem value="Operativo">Operativo</MenuItem>
              <MenuItem value="Profesional o técnico">Profesional o técnico</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
              <MenuItem value="Gerente">Gerente</MenuItem>
            </Select>
        
        
        </FormControl>
            </Grid>

            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Contratacion</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="tipo_contratacion"
              value={tipoContratacion}
              onChange={e => setTipoContratacion(e.target.value)}
            >
              <MenuItem value="Por obra o proyecto">Por obra o proyecto</MenuItem>
              <MenuItem value="Por tiempo determinado (temporal)">Por tiempo determinado (temporal)</MenuItem>
              <MenuItem value="Tiempo Indeterminado">Tiempo Indeterminado</MenuItem>
              <MenuItem value="Honorarios">Honorarios</MenuItem>
            </Select>
        
        </FormControl>
            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="tipo_personal">Tipo de Personal</InputLabel>
            <Select
              labelId="tipo_personal"
              id="tipo_personal"
              value={tipoPersonal}
              onChange={e => setTipoPersonal(e.target.value)}
            >
              <MenuItem value="Sindicalizado">Sindicalizado</MenuItem>
              <MenuItem value="Confianza">Confianza</MenuItem>
              <MenuItem value="Ninguno">Ninguno</MenuItem>
            </Select>
        </FormControl>

            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="tipo_jornada">Tipo de Jornada</InputLabel>
            <Select
              labelId="tipo_jornada"
              id="tipo_jornada"
              value={tipoJornada}
              onChange={e => setTipoJornada(e.target.value)}
            >
              <MenuItem value="Fijo nocturno (entre las 20:00 y 6:00 hrs)">Fijo nocturno (entre las 20:00 y 6:00 hrs)</MenuItem>
              <MenuItem value="Fijo diurno (entre las 6:00 y 20:00 hrs">Fijo diurno (entre las 6:00 y 20:00 hrs</MenuItem>
              <MenuItem value="Fijo mixto (combinación de nocturno y diurno)">Fijo mixto (combinación de nocturno y diurno)</MenuItem>
            </Select>
        </FormControl>
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Rolar Turnos</FormLabel>
            <Checkbox
                checked={rolarTurnos}
                onChange={e => setRolarTurnos(e.target.checked)}
                value="true"            
            />
             
            </Grid>


            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="exp_actual">Experiencia Puesto Actual</InputLabel>
            <Select
              labelId="exp_actual"
              id="exp_actual"
              value={expPuestoActual}
              onChange={e => setExpPuestoActual(e.target.value)}
            >
              <MenuItem value="Menos de 6 meses">Menos de 6 meses</MenuItem>
              <MenuItem value="Entre 6 meses y  1 año">Entre 6 meses y  1 año</MenuItem>
              <MenuItem value="Entre 1 a 4 años">Entre 1 a 4 años</MenuItem>
              <MenuItem value="Entre 5 a 9 años">Entre 5 a 9 años</MenuItem>
              <MenuItem value="Entre 10 a 14 años">Entre 10 a 14 años</MenuItem>
              <MenuItem value="Entre 15 a 19 años">Entre 15 a 19 años</MenuItem>
              <MenuItem value="Entre 20 a 24 años">Entre 20 a 24 años</MenuItem>
              <MenuItem value="25 años o más">25 años o más</MenuItem>
            </Select>
        
        </FormControl>
            </Grid>


            


              <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="exp_total">Experiencia Total </InputLabel>
            <Select
              labelId="exp_total"
              id="exp_total"
              value={expTotal}
              onChange={e => setExpTotal(e.target.value)}
            >
              <MenuItem value="Menos de 6 meses">Menos de 6 meses</MenuItem>
              <MenuItem value="Entre 6 meses y  1 año">Entre 6 meses y  1 año</MenuItem>
              <MenuItem value="Entre 1 a 4 años">Entre 1 a 4 años</MenuItem>
              <MenuItem value="Entre 5 a 9 años">Entre 5 a 9 años</MenuItem>
              <MenuItem value="Entre 10 a 14 años">Entre 10 a 14 años</MenuItem>
              <MenuItem value="Entre 15 a 19 años">Entre 15 a 19 años</MenuItem>
              <MenuItem value="Entre 20 a 24 años">Entre 20 a 24 años</MenuItem>
              <MenuItem value="25 años o más">25 años o más</MenuItem>
            </Select>
        
        </FormControl>
            </Grid>


            <Grid item xs={6} sm={6}>
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange= {e => setEmail(e.target.value)}
                id="email"
                label="Correo Electrónico"
                autoFocus
              />
              </Grid>
            
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passTemp"
                label="Password"
                type="password"
                id="passTemp"
                onChange = {e => setPassTemp(e.target.value)}
                value={passTemp}
                autoComplete="current-password"
              />
            </Grid>
            {/*<Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
          </Grid>*/}
          </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar
          </Button>
          {/*<Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
        </Grid>*/}
        </form>
      </div>
      <Box mt={5}>
       {/*<Copyright />*/}
      </Box>
    </Container>
    </div>
  );
}