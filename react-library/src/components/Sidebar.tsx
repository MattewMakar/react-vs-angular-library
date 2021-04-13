import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Drawer, CssBaseline, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { links } from "./routes";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${200}px)`,
      marginLeft: 240,
      background: "#000000",
      "& *": { textAlign: "center" },
    },
    drawer: {
      width: 200,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 200,
      background: "#3b6076",
      color: "#F0F0F0",
      "& *": {
        fontWeight: 700,
      },
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: "none",
      color: "inherit ",
      "& :active": {
        color: "inherit",
      },
    },
    icon: {
      color:"#4FAB0C"
    }
  })

);
const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <h1 style={{ margin: "auto" }}>Your Online Library</h1>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          {links.map((list, index) => (
            <Link to={list.link} className={classes.link} key={index}>
              <ListItem button>
                <ListItemIcon className={classes.icon}>{list.icon}</ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default Sidebar;
