import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Book as BookType } from "../Book";
import axios from "axios";
import Book from "./Book";

const useStyles = makeStyles({
  search: {
    width: "100%",
    marginBottom: 30,
  },
});

const Search = () => {
  const classes = useStyles();
  const [books, setBooks] = useState<BookType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      const data = await axios({ method: "get", url: `http://localhost:8000/books/${e.target.value}` });
      setBooks(data.data);
    } else {
      setBooks([]);
    }
  };
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>, id: string): Promise<void> => {
    await axios({ method: "delete", url: `http://localhost:8000/books/${encodeURI(id)}` });
    const data = await axios({ method: "get", url: `http://localhost:8000/books/${inputValue}` });

    setBooks(data.data);
  };

  return (
    <React.Fragment>
      <TextField id="outlined-basic" label="Search for a book" placeholder="Ex.harry potter." value={inputValue} className={classes.search} onChange={handleChange} variant="outlined" />
      {books.map((book, index) => (
        <Book key={index} book={book} handleClick={handleClick} />
      ))}
    </React.Fragment>
  );
};

export default Search;
