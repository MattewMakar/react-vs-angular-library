import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "./routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      marginLeft: 240,
      marginTop: 50,
    },
  })
);

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Switch>
        {mainRoutes.map((route, index) => 
          <Route  path={route.path} key={index} exact>
            {route.Component}
          </Route>
        )}
      </Switch>
    </main>
  );
};

export default Main;
