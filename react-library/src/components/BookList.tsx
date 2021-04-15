import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Book from "./Book";
import { Card, Grid} from "@material-ui/core";
import { Book as BookType } from "../Book";

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
    "& h1": {
      margin: "auto",
    },
  },
  warning: {
    background: "#E80B0B",
  },
});
const BookList = () => {
  const classes = useStyles();
  const [books, setBooks] = useState<BookType[] | undefined>();
  useEffect(() => {
    (async () => {
      const data = await axios({ method: "get", url: "http://localhost:8000/books" });
      setBooks(data.data);
    })();
  }, []);


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement> , id:string) => {

       await axios({ method: "delete", url: `http://localhost:8000/books/${encodeURI(id)}` });


      const data = await axios({ method: "get", url: "http://localhost:8000/books" });
      setBooks(data.data);
  
  };

  return (
    <React.Fragment>
      <Card className={classes.heading}>
        <h1>Available Books</h1>
      </Card>
      <Grid container justify="flex-start" spacing={3}>
        {books?.map((book, index) => (
          <Grid item  sm={12} md={12} lg={6} key={index}>
            <Book book={book} handleClick={ handleClick } />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default BookList;
