import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  heading: {
    width: "50%",
    background: "#081C8D",
    textAlign: "center",
    color: "#FFFFFF",
    margin: "auto",
    marginBottom: "20px",
    "& h1":{
      margin: "auto",
    },
  },
  warning: {
    background: "#E80B0B",
  },
});
const BookList = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.heading} ><h1>Available Books</h1></Card>
      <Grid container justify="flex-start" spacing={3}>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid container justify="flex-start" alignItems="flex-start">
                <Grid item xs={6}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt="book img" />
                </Grid>
                <Grid item xs={6}>
                  <h2>Harry</h2>
                  <h3>jk</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium delectus maiores quaerat impedit quod amet, voluptas eligendi quisquam, voluptatibus ab accusantium alias quasi quae dolorem aspernatur magni et dicta officia!</p>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      view
                  </Button>
                    <Button variant="contained" size="small" color="secondary">
                      edit{" "}
                    </Button>
                    <Button variant="contained" size="small" className={classes.warning}>
                      delete
                  </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid container justify="flex-start" alignItems="flex-start">
                <Grid item xs={6}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt="book img" />
                </Grid>
                <Grid item xs={6}>
                  <h2>Harry</h2>
                  <h3>jk</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium delectus maiores quaerat impedit quod amet, voluptas eligendi quisquam, voluptatibus ab accusantium alias quasi quae dolorem aspernatur magni et dicta officia!</p>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      view
                  </Button>
                    <Button variant="contained" size="small" color="secondary">
                      edit{" "}
                    </Button>
                    <Button variant="contained" size="small" className={classes.warning}>
                      delete
                  </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid container justify="flex-start" alignItems="flex-start">
                <Grid item xs={6}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt="book img" />
                </Grid>
                <Grid item xs={6}>
                  <h2>Harry</h2>
                  <h3>jk</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium delectus maiores quaerat impedit quod amet, voluptas eligendi quisquam, voluptatibus ab accusantium alias quasi quae dolorem aspernatur magni et dicta officia!</p>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      view
                  </Button>
                    <Button variant="contained" size="small" color="secondary">
                      edit{" "}
                    </Button>
                    <Button variant="contained" size="small" className={classes.warning}>
                      delete
                  </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid container justify="flex-start" alignItems="flex-start">
                <Grid item xs={6}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt="book img" />
                </Grid>
                <Grid item xs={6}>
                  <h2>Harry</h2>
                  <h3>jk</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium delectus maiores quaerat impedit quod amet, voluptas eligendi quisquam, voluptatibus ab accusantium alias quasi quae dolorem aspernatur magni et dicta officia!</p>
                  <CardActions>
                    <Button variant="contained" size="small" color="primary">
                      view
                  </Button>
                    <Button variant="contained" size="small" color="secondary">
                      edit{" "}
                    </Button>
                    <Button variant="contained" size="small" className={classes.warning}>
                      delete
                  </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>

    
  );
};

export default BookList;
