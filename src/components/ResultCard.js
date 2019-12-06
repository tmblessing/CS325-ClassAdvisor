import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  result: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  },
  tags: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

function ResultCard(props) {
  const classes = useStyle();

  function TagList(props) {
    const tags = props.tags;
    const tagItems = tags.map(tag => <Chip size="small" label={tag} />);

    return <div className={classes.tags}>{tagItems}</div>;
  }

  return (
    <React.Fragment>
      <Paper className={classes.result}>
        <Typography variant="h6">{props.longName}</Typography>
        <Divider variant="fullWidth" />
        <Typography component="p">{props.description}</Typography>
        <TagList tags={props.tags} />
      </Paper>
    </React.Fragment>
  );
}

export default ResultCard;
