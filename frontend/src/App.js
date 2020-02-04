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
import Profile from "./components/Profile";

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
            <Route exact path="/home" component={Home}/>
            <Route exact path="/datae" component={Dataencuestas}/>
            <Route exact path="/profile" component={Profile} />

            <Route component={Page404}/>
        </Switch>
    </Router>
  );
};

export default App;
