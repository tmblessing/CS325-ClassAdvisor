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

function CourseComment(props) {
  const classes = useStyle();

  function TagList(props) {
    const tags = props.tags;
    const tagItems = tags.map(tag => (
      <Chip size="small" key={tag} label={tag} />
    ));

    return <div className={classes.tags}>{tagItems}</div>;
  }

  return (
    <React.Fragment>
      <row style={{ marginTop: "10px" }}>
        <col style={{ marginRight: "50px", marginLeft: "50px" }}>
          <div class="card">
            <div class="card-body" style={{ background: "#f7f7f7" }}>
              <row style={{ marginTop: "10px" }}>
                <col xs={3}>
                  {" "}
                  <h5>Semester: {props.semester}</h5>{" "}
                </col>
                <col xs={5}>
                  <div className={classes.tags}>
                    <TagList tags={props.tags} />
                  </div>
                </col>
                <col xs={4} style={{ textAlign: "right" }}>
                  <p>
                    <ThumbUpIcon /> &nbsp; {props.upVotes} &nbsp; &nbsp;{" "}
                    <ThumbDownIcon /> &nbsp; {props.downVotes}
                  </p>
                </col>
              </row>
              <row style={{ marginTop: "10px" }}>
                <col xs={3}>
                  {" "}
                  <h5>Professor: {props.professor} </h5>{" "}
                </col>
                <col xs={9}>
                  {" "}
                  <p>{props.comment}</p>{" "}
                </col>
              </row>
            </div>
          </div>
        </col>
      </row>
    </React.Fragment>
  );
}

export default CourseComment;
