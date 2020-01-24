import React from 'react';
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

  const { register, handleSubmit } = useForm({
    defaultValues: {
      nombre: "bill",
      apellido: "luo",
      email: "test@test.com",
      empleados: [],
      _id: ''
    }
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  

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
        <form className={classes.form} noValidate>
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
                ref={register}
                autoFocus
              />
              <input type='text' name="nombre" ref={register} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="Apellido Paterno"
                variant="outlined"
                required
                fullWidth
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
              />
            </Grid>
            <Grid item xs={4}>
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup defaultValue="h" aria-label="sexo" name="customized-radios">
        <FormControlLabel value="h" control={<StyledRadio />} label="Hombre" />
        <FormControlLabel value="m" control={<StyledRadio />} label="Mujer" />
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
                name="password"
                label="Password"
                type="password"
                id="password"
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