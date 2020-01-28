import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from "../../react-auth0-spa";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img width="150" src="https://dev-david-gatica.pantheonsite.io/wp-content/uploads/2020/01/logo-blanco-111.png"/>
          </Typography>
          
          <Button color="inherit"> {!isAuthenticated && (
          <div>
        <div onClick={() => loginWithRedirect({})}>Ingresar</div>
        </div>
      )}

      {isAuthenticated && <div onClick={() => logout()}>Salir</div>}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
