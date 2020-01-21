import React from 'react';
import {render} from 'react-dom';
import {Route ,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

//Routes
import AppRoutes from './routes';
render(<App/>, document.getElementById('app'));
/*const routing = () => (
<Router>
    <AppRoutes/>
  </Router>);*/

render(<App/>, document.getElementById('app'));