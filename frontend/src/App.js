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
import Stepper from "./components/form/Stepper";
import Encuesta1 from './components/form/Encuesta1';
import Home from './components/template/Home';
//import Home from './components/template/Home';
import config from "./auth_config.json";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

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
            <Route exact path="/encuestas/1" component={Stepper}/>
            <Route exact path="/encuestas/2" component={Encuesta1}/>
            <Route exact path="/encuestas/3" component={Encuesta1}/>
            <Route exact path="/home" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </Router>
  );
};

export default App;
