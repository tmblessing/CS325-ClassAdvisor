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

//Using both makeStyles to make a style sheet and createTheme
//to make a theme is stupid but I'm not smart enough to rewrite
//this style sheet in a way that it works as a theme.
//-Tom
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    "margin-top": "300px",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

//All this theme is doing is changing the background color -Tom
const bgTheme = createMuiTheme({
  palette: {
    background: {
      default: "#119bab"
    }
  }
});

export default function SearchComponent(props) {
  const classes = useStyles();
  var querryValue = "";

  const handleChange = event => {
    querryValue = event.target.value;
  };

  const updateQuerry = event => {
    props.setQuerry(querryValue);
  };

  return (
    <Container maxWidth="sm">
      <MuiThemeProvider theme={bgTheme}>
        <CssBaseline />
        <Box component="span" m={1}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search ClassAdvisor..."
              inputProps={{ "aria-label": "Search ClassAdvisor..." }}
              onChange={handleChange}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              onClick={updateQuerry}
              aria-label="search"
              component={Link}
              to="/Results"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </MuiThemeProvider>
    </Container>
  );
}
