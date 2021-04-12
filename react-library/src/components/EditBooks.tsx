import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Search from "./Search";
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
const EditBooks = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.heading}>
        <h1>Edit A Book</h1>
      </Card>
      <Search />
    </div>
  );
};

export default EditBooks;
