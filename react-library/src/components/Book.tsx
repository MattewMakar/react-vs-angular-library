import React from 'react';
import { useHistory } from 'react-router-dom';
import noImage from "../assets/No_Image_Available.jpg"
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Book as BookType } from '../Book';
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  warning: {
    background: "#E80B0B",
  },
  summary: {
    height: 100,
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  image: {
    height: 400,
    width: 260,
    borderRadius: 5,
    boxShadow:"5px 5px 5px #888888"
  } 
});



const Book = ({ book , handleClick}: { book: BookType , handleClick:(e : React.MouseEvent<HTMLButtonElement>, id:string) =>void}) => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="flex-start" alignItems="flex-start">
          <Grid item xs={6}>
            <img className={classes.image} src={book.cover ? book.cover : noImage} alt={book.title} />
          </Grid>
          <Grid item xs={6}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h5>{book.date?.toString().substr(0,10)}</h5> 
            <p className={classes.summary}>{book.summary}</p>
            <CardActions>
              <Button variant="contained" onClick={()=> history.push(encodeURI(`/view/${book.title}`))} size="small" color="primary">
                view more
              </Button>
              <Button variant="contained" onClick={()=> history.push(encodeURI(`/edit/${book.title}`))} size="small" color="secondary">
                edit
              </Button>
              <Button variant="contained" size="small" className={classes.warning} onClick={(e) => handleClick(e, book.title)}>
                delete
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Book;
