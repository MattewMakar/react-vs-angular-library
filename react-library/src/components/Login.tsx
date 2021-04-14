import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from  "../assets/background.jpg"

const useStyle = makeStyles({
  root: {
    width: "80%",
    textAlign: "center",
    margin: "auto",
    marginTop: "10%",
    padding: "5% 0",
    background: "#eb01a5",
    backgroundImage: `linear-gradient(to top, rgba(0, 25, 50, 0.52), rgba(10, 0, 250,  0.13) ) ,url(${background})`,
    backgroundSize: "100%",
    color: "#08756b",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px #888888",
  },
  message: {
    background: "#e2e4e3",
    padding: "10px",
    width: "max-content",
    margin: "10px auto",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px #888888",
  },
});
const Login = () => {
  const classes = useStyle();
  const { loginWithPopup } = useAuth0();
  return (
    <Card className={classes.root}>
      <div className={classes.message}>
        <h1 > Welcome To Our Online Library</h1>

        <Button
       
          color="primary"
          variant="contained"
          onClick={() => {
            loginWithPopup();
          }}
        >
          Login
        </Button>
        <p >
          <strong>NOTE:</strong> you need to allow popup in your browser in order to login
        </p>
      </div>
    </Card>
  );
};

export default Login;
