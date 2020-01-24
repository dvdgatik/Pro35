import React, { useState }  from 'react';
import {Avatar, Button, CssBaseline,TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container} from '@material-ui/core'
//import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
//import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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


const useSelectStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
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

function getSelectStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = [
  'Casado',
  'Soltero',
  'Unión Libre',
  'Divorciado',
  'Viudo'
];
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
  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const [nombre, setNombre] = useState('fsdfds')
  const [paterno, setPaterno] = useState('')
  const [materno, setMaterno] = useState('')
  const [sexo, setSexo] = useState('')
  const [edad, setEdad] = useState('')
  const [edoCivil, setEdoCivil] = useState('')
  const [nivelEstudios, setNivelEstudios] = useState('')
  const [profesion, setProfesion] = useState('')
  const [tipoPuesto, setTipoPuesto] = useState('')
  const [tipoContratacion, setTipoContratacion] = useState('')
  const [tipoPersonal, setTipoPersonal] = useState('')
  const [tipoJornada, setTipoJornada] = useState('')
  const [rolarTurnos, setRolarTurnos] = useState(false)
  const [expPuestoActual, setExpPuestoActual] = useState(0)
  const [email, setEmail] = useState('')
  const [expTotal, setExpTotal] = useState(0)
  const [usuario, setUsuario] = useState('holacomoestas')
  const [perfil, setPerfil] = useState('')
  const [passTemp, setPassTemp] = useState('admin')
  const [fstLogin, setFstLogin] = useState(true)
  const [isSent, setIsSent] = useState(false)

  const thankYouMessage = <p>Tank you for Your input!</p>
  const from = <form>...</form>

  const submit = e => {
    e.preventDefault()   
     fetch('http://localhost:3000/api/empleado/guardar', {
      method: 'POST',
      body: JSON.stringify({
        usuario,
        passTemp,
      }),
      headers: {
				'Accept': 'application/json',
				'content-type':'application/json'
			}
    }).then(alert(passTemp))
    .catch(err => console.log(err))
  }

  console.log(submit)


  
  
  return (
    
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Datos Personales
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
            <Grid item xs={4}>
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup defaultValue="h" aria-label="sexo" name="customized-radios">
        <FormControlLabel value={sexo}  onChange={e => setSexo(e.target.value)} control={<StyledRadio />} label="Hombre" />
        <FormControlLabel value={sexo}  onChange={e => setSexo(e.target.value)} control={<StyledRadio />} label="Mujer" />
      </RadioGroup>
              
            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Estado Civil</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
            </Grid>

            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Nivel de Estudios</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>


            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Profesión</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>

            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Puesto</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>

            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Contratacion</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Personal</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>
            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Tipo de Jornada</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Rolar Turnos</FormLabel>
            <RadioGroup defaultValue="" aria-label="rolar_turnos" name="customized-radios">
        <FormControlLabel value="" control={<StyledRadio />}  />
      </RadioGroup>
              
            </Grid>


            <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Experiencia Puesto Actual</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>


            


              <Grid item xs={4}>
            <FormControl           style={{ width:'100%'}} className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Experiencia Total </InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getSelectStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
        </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
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
  );
}