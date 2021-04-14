import React from 'react';
import { Route, Switch } from "react-router-dom";
import { routes } from './routes';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';


const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route path={route.path} key={index} >
          {isAuthenticated ? route.Component : <Login/>}
        </Route>
      ))}
    </Switch>
  );
}

export default App;
