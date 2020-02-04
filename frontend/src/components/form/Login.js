import React, {useState, useEffect}from "react";
import { useAuth0} from "../../react-auth0-spa";
import { Redirect ,Router, Route, Switch } from "react-router-dom";


const Login = () => {
  let exists = false;
  
  useEffect(() => {
   
    fetchempleados()
  })
  const [empleados, setEmpleados] = useState([]);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  let fetchempleados =  () => {}
  if (user) {
     exists = true;
  let userid_ = JSON.stringify(user.sub).replace('"auth0|','').replace('"','')
     fetchempleados = () =>fetch('http://localhost:3000/api/empleado/listarid/' + userid_)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        //this.setState({ categorias: data });
        setEmpleados(data);
        //console.log(this.state.categorias+ " Categorias");
        console.log(data)
      });
  

}

  return (
    <div>
      {!isAuthenticated && (
          <div>
        {/*<button onClick={() => loginWithRedirect({})}>Ingresar</button>*/}
        {loginWithRedirect({})}
        </div>
      )}

      {/*isAuthenticated && <button onClick={() => logout()}>Salir</button>*/}
      {
        exists ? (
          empleados.map(empleado => {
            return(
              <div key={empleado._id}>
                  {empleado.fstLogin ? (
                    <Redirect to='/signup'/>
                  ) : (
                    <Redirect to='/home'/>
                  ) }
  
              </div>
            )
          })
        ) : (
          <h1>No Autentication</h1>
        )
        
      }  
    </div>
  );
};

export default Login;