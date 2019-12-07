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

// function resultList(searchQuery) {
//   const results = courseList.classes.filter(result => {
//     return (
//       result.courseNumber.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
//       -1
//     );
//   });
// }
// function resultList(results) {
//   const results = props.tags;
//   const tagItems = tags.map(tag => <Chip size="small" key={tag} label={tag} />);
// }

function Results(props) {
  const classes = useStyle();

  console.log("Querry was: " + props.querry);
  const results = courseList.classes.filter(result => {
    return (
      result.courseNumber.toLowerCase().indexOf(props.querry.toLowerCase()) !==
      -1
    );
  });
  console.log(results);
  console.log("Search results: " + results[0].courseNumber);
  //const filteredCourses = courseList.filter(result => {
  //return country.name.toLowerCase().indexOf(props.querry.toLowerCase()) !== -1;
  //});

  // This return value needs to be built using data from the JSON file
  // When a result is clicked, it should redirect the user to the course page - which can be generated using data from JSON
  // - Suraj
  console.log(courseList);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ResultCard
          course={courseList.classes[0]}
          courseNumber={courseList.classes[0].courseNumber}
          courseName={courseList.classes[0].courseName}
          description={courseList.classes[0].description}
          tags={courseList.classes[0].tags}
          setOpenCourse={props.setOpenCourse}
        />
        <ResultCard
          course={courseList.classes[1]}
          courseNumber={courseList.classes[1].courseNumber}
          courseName={courseList.classes[1].courseName}
          description={courseList.classes[1].description}
          tags={courseList.classes[1].tags}
          setOpenCourse={props.setOpenCourse}
        />
        <ResultCard
          course={courseList.classes[2]}
          courseNumber={courseList.classes[2].courseNumber}
          courseName={courseList.classes[2].courseName}
          description={courseList.classes[2].description}
          tags={courseList.classes[2].tags}
          setOpenCourse={props.setOpenCourse}
        />
        <ResultCard
          course={courseList.classes[3]}
          courseNumber={courseList.classes[3].courseNumber}
          courseName={courseList.classes[3].courseName}
          description={courseList.classes[3].description}
          tags={courseList.classes[3].tags}
          setOpenCourse={props.setOpenCourse}
        />
        {/* <Link to="/Course" style={{ textDecoration: "none" }}>
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
        </Link> */}
      </Container>
    </React.Fragment>
  );
}
console.log(Results);
export default Results;
