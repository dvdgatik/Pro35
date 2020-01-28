import React from "react";
import { useAuth0} from "../../react-auth0-spa";
import { Redirect ,Router, Route, Switch } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
          <div>
        {/*<button onClick={() => loginWithRedirect({})}>Ingresar</button>*/}
        {loginWithRedirect({})}
        </div>
      )}

      {/*isAuthenticated && <button onClick={() => logout()}>Salir</button>*/}
      <Redirect to='/signup'/>;   
    </div>
  );
};

export default Login;