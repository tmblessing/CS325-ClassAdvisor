import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const headerStyles = makeStyles(theme => ({
  bar: {
    flexGrow: 1,
    padding: "2px 4px",
    display: "flex",
    //alignItems: "center",
    "background-color": "#000000",
    color: "#FFFFFF"
  },
  title: {
    flexGrow: 1,
    "margin-right": "10px;"
  }
}));

// The Header creates links that can be used to navigate
// between routes.

function HeaderBar() {
  const classes = headerStyles();

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          ClassAdvisor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function SearchHeader() {
  return <HeaderBar />;
}
