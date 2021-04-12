import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Card ,TextField, Grid , Button} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "80%",
      textAlign: "center",
      margin: "auto"
    },
    heading: {
      width: "50%",
      background: "#081C8D",
      textAlign: "center",
      color: "#FFFFFF",
      margin: "auto",
      marginBottom: "50px",
      "& h1": {
        margin: "auto",
      },
      
    },

    input: {
      width: "100%"
    },
    button: {
      width: "100%",
      fontWeight: 700
    }
  })
);

const AddBook = () => {
  const classes = useStyles();


  return (
      <div>
        <Card className={classes.heading}>
          <h1>Add A Book</h1>
        </Card>
        <form action="" className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField className={classes.input} required id="outlined-required" label="Book Title" placeholder="enter the book's title " variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.input} label="Author" placeholder="enter the book's author " variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.input} required id="outlined-required" label="UUID" placeholder="enter the book's UUID " variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.input} label="Date" placeholder="enter the book title " variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField className={classes.input} label="Cover image url" placeholder="enter the book title " variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField className={classes.input} multiline id="outlined-textarea" label="Summary" placeholder="enter the book's summary " variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button}  variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
      </form>
      </div>
  
  );
}

export default AddBook
