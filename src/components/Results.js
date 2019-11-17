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

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}));

function Results() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <Typography variant="h6">
            CS 325: Introduction to human computer interaction
          </Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">
            In this course we will examine the important problems in usability,
            Human Computer Interaction, User Interfaces, and Human Centered
            Computing. We will examine elements of HCI history, human
            information processing capabilities, HCI design, user interface
            prototyping, methods and new applications and directions in Human
            Computer Interaction.
          </Typography>
        </Paper>
        <Paper className={classes.root}>
          <Typography variant="h6">CHEM-ENG 325: Thermodynamics II</Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">
            Fundamentals and applications of the thermodynamics of phase and
            chemical reaction equilibrium; applications to industrial problems
          </Typography>
        </Paper>
        <Paper className={classes.root}>
          <Typography variant="h6">
            Nursing 325: Maternal-Newborn Nursing
          </Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">
            This course introduces the student to the theory and practice of
            maternal-newborn nursing care for families in the childbearing
            years, both uncomplicated and high-risk
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default function ResultsPage() {
  return <Results />;
}
