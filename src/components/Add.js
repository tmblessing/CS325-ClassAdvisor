import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

//Using both makeStyles to make a style sheet and createTheme
//to make a theme is stupid but I'm not smart enough to rewrite
//this style sheet in a way that it works as a theme.
//-Tom
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "100%",
    alignItems: "center", "margin-top": "300px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    alignSelf: "center"
  }
}));

export default function Add() {
  const classes = useStyles();

  return (
    <div>
      <h1>Class Information</h1>
      <h2>COMPSCI 325: Human-Computer Interaction</h2>
    </div>
    
  );
}