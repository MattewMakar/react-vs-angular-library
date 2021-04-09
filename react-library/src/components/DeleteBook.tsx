import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    heading: {
      width: "50%",
      background: "#081C8D",
      textAlign: "center",
      color: "#FFFFFF",
      margin: "auto",
      marginBottom: "20px",
      "& h1": {
        margin: "auto",
      },
    },
  })
);
const DeleteBook = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.heading}>
        <h1>Delete a Books</h1>
      </Card>
      <TextField id="outlined-basic" label="search for a book" placeholder="Ex.harry potter." variant="outlined" />
    </div>
  );
};

export default DeleteBook;
