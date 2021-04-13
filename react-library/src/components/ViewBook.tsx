import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { useParams } from "react-router-dom";
import { Book } from "../Book";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  image: {
    height: "100%",
    width:"100%"
  }
  
});
const ViewBook = () => {
  const classes = useStyles();
  const { id }: { id: string } = useParams();
  const [book, setBook] = useState<Book>();
  useEffect(() => {
    (async () => {
      const data = await axios({ method: "get", url: `http://localhost:8000/books/${id}` });
      setBook(data.data[0]);
    })();
  }, [id]);
  return (
 <Card className={classes.root}>
      {book && <CardContent>
        <Grid container justify="flex-start" alignItems="flex-start" spacing={ 3}>
          <Grid item xs={2}>
            <img className={classes.image} src={book.cover} alt={book.title} />
          </Grid>
          <Grid item xs={10}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h5>{book.date?.toString().substr(0, 10)}</h5>
            <h5>{book.UUID}</h5>
            <p >{book.summary}</p>
          </Grid>
        </Grid>
      </CardContent>}
    </Card>
  );
};

export default ViewBook;
