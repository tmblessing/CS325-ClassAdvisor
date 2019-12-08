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
import { Button, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import Add from "./Add";
import { borderBottom } from "@material-ui/system";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Chip from "@material-ui/core/Chip";

import json_data from "../data/courseList.json";

//Using both makeStyles to make a style sheet and createTheme
//to make a theme is stupid but I'm not smart enough to rewrite
//this style sheet in a way that it works as a theme.
//-Tom
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "100%",
    alignItems: "center",
    "margin-top": "300px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    alignSelf: "center"
  },
  tags: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    "& > *": {
      marginRight: theme.spacing(0.5)
    }
  }
}));

export default function CourseComponent(props) {
  console.log("generating page...");
  console.log(props.openCourse.courseNumber);

  const classes = useStyles();
  // for (var i = 0; i < json_data.length; i++) {
  // var obj = json_data[i];
  // if (obj.course_number === course_number) {
  //       return getPage(obj, classes);
  //     }
  //     console.log(obj.id);
  //   }
  // }
  return getPage(props.openCourse, classes);
}

function getCommentBox(comm_json, classes) {
  if (comm_json.length === 0) {
    console.log("empty array received");
    return [];
  }
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
    <Row style={{ marginTop: "30px" }}>
      <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
        <div class="card">
          <div class="card-body" style={{ background: "#f7f7f7" }}>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={3}>
                {" "}
                <h5>Semester: {comm_json.semester}</h5>{" "}
              </Col>
              <Col xs={5}>
                <div className={classes.tags}>{chips(comm_json.tags)}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <p>
                  <ThumbUpIcon /> &nbsp; {comm_json.upVotes} &nbsp; &nbsp;{" "}
                  <ThumbDownIcon /> &nbsp; {comm_json.downVotes}
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col xs={3}>
                {" "}
                <h5>Professor: {comm_json.professor}</h5>{" "}
              </Col>
              <Col xs={9}>
                {" "}
                <p>{comm_json.comment}</p>{" "}
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

function getPage(props, classes) {
  console.log("test");
  function chips(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return arr.map(tag => {
        return <Chip size="small" label={tag} />;
      });
    }
  }
  function filter_comments(elem, dd) {
    console.log("filtering comments array");
    console.log(elem);
    console.log(dd);
    if (dd === null) {
      return elem;
    }
    if (dd.indexOf(elem.professor) > -1 || dd.indexOf(elem.semester) > -1) {
      console.log("selected professor " + elem.professor);
      return elem;
    } else {
      console.log("ignored professor " + elem.professor);
      return [];
    }
  }
  return (
    <div>
      <Row style={{ marginTop: "20px" }}>
        <Col xs={9} style={{ textAlign: "center" }}>
          <h1>
            {props.courseNumber} : {props.courseName}
          </h1>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Link to="/add">
            <Button size="lg" variant="info">
              Add Information
            </Button>
          </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col xs={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
          <h5>{props.description}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px", textAlign: "center" }}>
        <Col xs={{ span: 2, offset: 2 }}>
          <h5>Projects:</h5>
          <h5>Quizzes:</h5>
          <h5>Midterms:</h5>
          <h5>Homeworks:</h5>
          <h5>Readings:</h5>
        </Col>

        <Col xs={1} style={{ textAlign: "center" }}>
          <h5>{props.comments[0].projects}</h5>
          <h5>{props.comments[0].quizzes}</h5>
          <h5>{props.comments[0].midterms}</h5>
          <h5>{props.comments[0].homeworks}</h5>
          <h5>{props.comments[0].readings}</h5>
        </Col>
        <Col xs={{ span: 3, offset: 1 }}>
          <h5>Attendance Required:</h5>
          <h5>Textbook Required:</h5>
          <h5>Lectures Posted:</h5>
          <h5>Echo360 Recordings:</h5>
          <h5>Final Exam:</h5>
        </Col>
        <Col xs={1} style={{ textAlign: "center" }}>
          <h5>{props.comments[0].attendance}</h5>
          <h5>{props.comments[0].textbook}</h5>
          <h5>{props.comments[0].lectures}</h5>
          <h5>{props.comments[0].echo360}</h5>
          <h5>{props.comments[0].final}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
          <div class="card">
            <div class="card-body" style={{ background: "#f7f7f7" }}>
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <h4 class="card-title">Top Comment</h4>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <h4 class="card-title">
                    <ThumbUpIcon /> &nbsp; {props.comments[0].upVotes} &nbsp;
                    &nbsp; <ThumbDownIcon /> &nbsp;{" "}
                    {props.comments[0].downVotes}
                  </h4>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col xs={3}>
                  {" "}
                  <h5>{props.comments[0].semester}</h5>{" "}
                </Col>
                <Col xs={9}>
                  <div className={classes.tags}>{chips(props.tags)}</div>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col xs={3}>
                  {" "}
                  <h5>Professor: {props.comments[0].professor} </h5>{" "}
                </Col>
                <Col xs={9}>
                  {" "}
                  <p>{props.comments[0].comment} </p>{" "}
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col style={{ textAlign: "center" }}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By Semester"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Fall 2019</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fall 2018</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fall 2017</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By Professor"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Mahyar</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Hudlicka</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      {(props.dd = null)}
      {
        //["P1", "P2", "Mahyar"])
      }
      {
        //<p>^^^why is that printing?</p>
      }
      {props.comments
        .map(function(x) {
          return filter_comments(x, props.dd);
        })
        .map(getCommentBox)}

      {console.log("Comment box complete")}
    </div>
  );
}
