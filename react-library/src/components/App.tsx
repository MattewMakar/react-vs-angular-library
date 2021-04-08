import React from 'react';
import { Route, Switch } from "react-router-dom";
import { routes } from './routes';
const  App= () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route  path={route.path} key={index}>
          {route.Component}
        </Route>
      ))}
    </Switch>
  );
}

export default App;
