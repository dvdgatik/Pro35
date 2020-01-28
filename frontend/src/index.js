import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import history from "./utils/history";



//import App from './App';


//Routes
//import AppRoutes from './routes';
//render(<App/>, document.getElementById('app'));

//Components
//import App from './App';
import Login from "../../frontend/src/components/form/Login";
import SignUp from "../../frontend/src/components/form/SignUp";
import Page404 from "../../frontend/src/components/template/Page404";
import Stepper from "../../frontend/src/components/form/Stepper";
import Encuesta1 from '../../frontend/src/components/form/Encuesta1';
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";

const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );

{/*const App = () =>
    <Router>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/" component={Encuesta1}/>
            <Route exact path="/encuesta/1" component={Encuesta1}/>
            <Route exact path="/encuesta/2" component={Encuesta1}/>
            <Route exact path="/encuestas/" component={Encuesta1}/>
            <Route component={Page404}/>
        </Switch>
    </Router>;


render(<App />, 
document.getElementById('root')
);*/}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




