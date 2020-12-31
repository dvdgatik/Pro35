import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { Auth0Provider } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
//Components
import Loading from "./components/Loading";
import Login from "./components/form/Login";
import SignUp from "./components/form/SignUp";
import Page404 from "./components/template/Page404";
import Encuesta1 from "./components/form/Encuesta1/Index";
import Encuesta2 from "./components/form/Encuesta2/Index";
import Encuesta3 from './components/form/Encuesta3/Index';
import Profile from "./components/Profile";
import Centros from "./components/Centros";
import Areas from "./components/Areas";
import Departamentos from "./components/Departamentos";
import Empresas from "./components/Empresas";
import Reportes from "./components/Reportes";

import Home from './components/template/Home';
//import Home from './components/template/Home';
import config from "./auth_config.json";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import Dataencuestas from './components/form/Dataencuestas';

// styles
import "./App.css";
const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
        <Switch>
            <Route  path="/signup" component={SignUp}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/encuestas/1" component={Encuesta2}/>
            <Route exact path="/encuestas/2" component={Encuesta1}/>
            <Route exact path="/encuestas/3" component={Encuesta3} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/datae" component={Dataencuestas}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/centros" component={Centros} />
            <Route exact path="/areas" component={Areas} />
            <Route exact path="/departamentos" component={Departamentos} />
            <Route exact path="/empresas" component={Empresas} />
            <Route exact path="/reportes" component={Reportes} />
            <Route component={Page404}/>
        </Switch>
    </Router>
  );
};

export default App;
