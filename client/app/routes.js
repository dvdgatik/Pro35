import React from 'react';
import {Route, Switch} from "react-router-dom";


//Components
//import App from './App';
import Login from "./components/form/Login";
import SignUp from "./components/form/SignUp";
import Page404 from "./components/template/Page404";


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/index" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </App>;

export default AppRoutes;
