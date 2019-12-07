import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";
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
    const tagItems = tags.map(tag => (
      <Chip size="small" key={tag} label={tag} />
    ));

    return <div className={classes.tags}>{tagItems}</div>;
  }

  const handleClick = event => {
    props.setOpenCourse(props.course);
    console.log("User has selected: " + props.course.courseNumber);
  };
  // console.log("props???");
  // console.log(props.OpenCourse);
  function chips(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return arr.map(tag => {
        return <Chip size="small" label={tag} />;
      });
    }
  }
  return (
    <React.Fragment>
      <Link to="/Course" style={{ textDecoration: "none" }}>
        <Paper className={classes.result} onClick={handleClick}>
          <Typography variant="h6">
            {props.courseNumber}: {props.courseName}
          </Typography>
          <Divider variant="fullWidth" />
          <Typography component="p">{props.description}</Typography>
          {/* <TagList tags={props.setOpenCourse.tags}></TagList> */}
          <div className={classes.tags}>
            {chips(props.tags)}
            {/* <Chip size="small" label="Project Based" />
                  <Chip size="small" label="Readings" />
                  <Chip size="small" label="Pop Quiz" />
                  <Chip size="small" label="Group Work" /> */}
          </div>
        </Paper>
      </Link>
    </React.Fragment>
  );
}

export default ResultCard;
