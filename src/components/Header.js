import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const headerStyles = makeStyles(theme => ({
  bar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
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
    <header className={classes.bar}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          ClassAdvisor
        </Typography>
        <Link to="/"> Search -</Link>
        <Link to="/Course"> Course </Link>
      </Toolbar>
    </header>
  );
}

export default function Header() {
  return <HeaderBar />;
}
