import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
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
      }
  }),
);

const AddBook = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (<form className={classes.root} noValidate autoComplete="off">
    <div>
      <Card className={classes.heading}> <h1>Add Books</h1></Card>
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
      />
      <TextField
        id="standard-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </div>
    <div>
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="filled"
      />
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
      />
    </div>
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax={4}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />
    </div>
  </form>);
}

export default AddBook
