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
import ResultCard from "./ResultCard";
import courseList from "../data/courseList";

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
        <ResultCard
          longName={courseList[0].longName}
          description="In this course we will examine the important problems in usability, Human Computer Interaction, User Interfaces, and Human Centered Computing. We will examine elements of HCI history, human information processing capabilities, HCI design, user interface prototyping, methods and new applications and directions in Human Computer Interaction."
          tags={["Project Based", "Readings", "Pop Quiz", "Group Work"]}
          url="Course"
        />
        <Link to="/Course" style={{ textDecoration: "none" }}>
          <Paper className={classes.result}>
            <Typography variant="h6">
              CHEM-ENG 325: Thermodynamics II
            </Typography>
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
        </Link>
        <Link to="/Course" style={{ textDecoration: "none" }}>
          <Paper className={classes.result}>
            <Typography variant="h6">DANCE 325: Ballet VI</Typography>
            <Divider variant="fullWidth" />
            <Typography component="p">
              A continuation of DANCE 324. Taught on two campuses each semester.
              Location rotates among Mount Holyoke, Smith, and the University.
              Placement in the course is by Five College audition.
            </Typography>
            <div className={classes.tags}>
              <Chip size="small" label="Fun Class" />
              <Chip size="small" label="Great Professor" />
            </div>
          </Paper>
        </Link>
        <Link to="/Course" style={{ textDecoration: "none" }}>
          <Paper className={classes.result}>
            <Typography variant="h6">
              EDUC 325: Introduction to Special Education
            </Typography>
            <Divider variant="fullWidth" />
            <Typography component="p">
              This course is a study of the origin, diagnosis, and treatment of
              special needs children with an emphasis on learning, goal
              planning, and understanding their intellectual, social, physical
              and sensory needs.
            </Typography>
            <div className={classes.tags}>
              <Chip size="small" label="Reading Heavy" />
              <Chip size="small" label="Pop Quiz" />
            </div>
          </Paper>
        </Link>
      </Container>
    </React.Fragment>
  );
}

export default function ResultsPage() {
  return <Results />;
}
