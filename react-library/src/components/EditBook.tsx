import "date-fns";
import React, { useState, useEffect } from "react";
import { useParams , useHistory } from "react-router-dom";
import { Book } from "../Book";
import { createStyles, makeStyles, Theme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Card, TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      marginNormal: {
        marginBottom: 0,
        marginTop: 0,
      },
    },
  },
});
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
  let history = useHistory();
  const { id }: { id: string } = useParams();

  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    UUID: "",
    date: new Date(),
    cover: "",
    summary:"",
  });
  const [submit, setSubmit] = useState(true);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    if (book.title && book.UUID) {
      await axios({ method: "put", url: `http://localhost:8000/books/${id}` ,data: book});
      setSubmit(true);
      history.push('/');
    } else
    {
      setSubmit(false);
    }
  }
 const handleChange = (name: "title" | "author" | "UUID" | "date" | "cover" | "summary", value: any) => {
   setBook({ ...book, [name]: value });
 };
  
  useEffect(() => {
    (async () => {
      const data = await axios({ method: "get", url: `http://localhost:8000/books/${id}` });
      setBook(data.data[0]);
    })();
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <Card className={classes.heading}>
              <h1>Edit a Books</h1>
            </Card>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
              {" "}
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
                    onChange={(e) => handleChange("title", e.target.value)}
                    name="title"
                    error={!submit && !book.title ? true : false}
                    helperText="title is required."
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
                    onChange={(e) => handleChange("author", e.target.value)}
                    name="author"
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
                    onChange={(e) => handleChange("UUID", e.target.value)}
                    name="UUID"
                    error={!submit && !book.UUID ? true : false}
                    helperText="UUID is required."
                  />
                </Grid>
                <Grid item xs={6}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={book?.date}
                    onChange={(date) => handleChange("date", date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    className={classes.input}
                    inputVariant="outlined"
                    name="date"
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
                    onChange={(e) => handleChange("cover", e.target.value)}
                    name="cover"
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
                    onChange={(e) => handleChange("summary", e.target.value)}
                    name="summary"
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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default EditBook;
