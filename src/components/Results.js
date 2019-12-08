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
  const results = courseList.classes.filter(result => {
    return (
      result.courseNumber.toLowerCase().indexOf(props.querry.toLowerCase()) !==
      -1
    );
  });
  // This return value needs to be built using data from the JSON file
  // When a result is clicked, it should redirect the user to the course page - which can be generated using data from JSON
  // - Suraj
  console.log(courseList);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {results.map(result => (
          <ResultCard
            course={result}
            courseNumber={result.courseNumber}
            courseName={result.courseName}
            description={result.description}
            tags={result.tags}
            setOpenCourse={props.setOpenCourse}
          />
        ))}
      </Container>
    </React.Fragment>
  );
}
console.log(Results);
export default Results;
