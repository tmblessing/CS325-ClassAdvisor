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

function Results() {
  const classes = useStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper className={classes.result}>
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
          <div className={classes.tags}>
            <Chip size="small" label="Project Based" />
            <Chip size="small" label="Readings" />
            <Chip size="small" label="Pop Quiz" />
            <Chip size="small" label="Teams" />
          </div>
        </Paper>
        <Paper className={classes.result}>
          <Typography variant="h6">CHEM-ENG 325: Thermodynamics II</Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">
            Fundamentals and applications of the thermodynamics of phase and
            chemical reaction equilibrium; applications to industrial problems
          </Typography>
          <div className={classes.tags}>
            <Chip size="small" label="Lab" />
            <Chip size="small" label="Attendence Required" />
          </div>
        </Paper>
        <Paper className={classes.result}>
          <Typography variant="h6">
            Nursing 325: Maternal-Newborn Nursing
          </Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">
            This course introduces the student to the theory and practice of
            maternal-newborn nursing care for families in the childbearing
            years, both uncomplicated and high-risk.
          </Typography>
          <div className={classes.tags}>
            <Chip size="small" label="Lab" />
            <Chip size="small" label="Practical Component" />
            <Chip size="small" label="Readings" />
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default function ResultsPage() {
  return <Results />;
}
