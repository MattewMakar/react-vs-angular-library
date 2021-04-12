import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../Book";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "80%",
      textAlign: "center",
      margin: "auto",
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
      width: "100%",
    },
    button: {
      width: "100%",
      fontWeight: 700,
    },
  })
);
const EditBook = () => {
  const classes = useStyles();
  const { id }: { id: string } = useParams();
  const [book, setBook] = useState<Book>();
  useEffect(() => {
    (async () => {
      const data = await axios({ method: "get", url: `http://localhost:8000/books/${id}` });
      setBook(data.data[0]);
    })();
  },[id]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Card className={classes.heading}>
          <h1>Edit a Books</h1>
        </Card>
        <form action="" className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                required
                id="outlined-required"
                value={book?.title}
                label="Book Title"
                placeholder="enter the book's title "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                value={book?.author}
                label="Author"
                placeholder="enter the book's author"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                value={book?.UUID}
                required
                id="outlined-required"
                label="UUID"
                placeholder="enter the book's UUID "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                value={book?.date}
                label="Date"
                placeholder="enter the book's date"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                value={book?.cover}
                label="Cover image url"
                placeholder="enter the book's cover url "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.input}
                value={book?.summary}
                multiline
                id="outlined-textarea"
                label="Summary"
                placeholder="enter the book's summary "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button} variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </form>
  );
};

export default EditBook;
