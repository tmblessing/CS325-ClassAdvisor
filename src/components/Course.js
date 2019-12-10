import React, { useState } from "react";
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
  const [prof, setprof] = useState(props.openCourse.professors);
  const [sem, setsem] = useState(props.openCourse.semesters);
  console.log("generating page...");

  const classes = useStyles();
  function chips(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return arr.map(tag => {
        return <Chip size="small" label={tag} />;
      });
    }
  }
  function filter_comments(elem, prof, sem) {
    console.log("filtering comments array");
    if (prof === null) {
      return elem;
    }
    if (prof.indexOf(elem.professor) > -1 && sem.indexOf(elem.semester) > -1) {
      return elem;
    } else {
      return [];
    }
  }
  function sortP(pname) {
    return setprof(pname);
  }

  function applyFilter() {
    console.log("Comment box complete");
    return props.openCourse.comments
      .map(function(x) {
        return filter_comments(x, prof, sem);
      })
      .map(getCommentBox);
  }
  props.openCourse.renderp = applyFilter();
  return (
    <div>
      <Row style={{ marginTop: "20px" }}>
        <Col xs={9} style={{ textAlign: "center" }}>
          <h1>
            {props.openCourse.courseNumber} : {props.openCourse.courseName}
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
          <h5>{props.openCourse.description}</h5>
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
          <h5>{props.openCourse.comments[0].projects}</h5>
          <h5>{props.openCourse.comments[0].quizzes}</h5>
          <h5>{props.openCourse.comments[0].midterms}</h5>
          <h5>{props.openCourse.comments[0].homeworks}</h5>
          <h5>{props.openCourse.comments[0].readings}</h5>
        </Col>
        <Col xs={{ span: 3, offset: 1 }}>
          <h5>Attendance Required:</h5>
          <h5>Textbook Required:</h5>
          <h5>Lectures Posted:</h5>
          <h5>Echo360 Recordings:</h5>
          <h5>Final Exam:</h5>
        </Col>
        <Col xs={1} style={{ textAlign: "center" }}>
          <h5>{props.openCourse.comments[0].attendance}</h5>
          <h5>{props.openCourse.comments[0].textbook}</h5>
          <h5>{props.openCourse.comments[0].lectures}</h5>
          <h5>{props.openCourse.comments[0].echo360}</h5>
          <h5>{props.openCourse.comments[0].final}</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
          <div className="card">
            <div className="card-body" style={{ background: "#f7f7f7" }}>
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <h4 className="card-title">Top Comment</h4>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <h4 className="card-title">
                    <ThumbUpIcon /> &nbsp;{" "}
                    {props.openCourse.comments[0].upVotes} &nbsp; &nbsp;{" "}
                    <ThumbDownIcon /> &nbsp;{" "}
                    {props.openCourse.comments[0].downVotes}
                  </h4>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col xs={3}>
                  {" "}
                  <h5>{props.openCourse.comments[0].semester}</h5>{" "}
                </Col>
                <Col xs={9}>
                  <div className={classes.tags}>
                    {chips(props.openCourse.tags)}
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col xs={3}>
                  {" "}
                  <h5>
                    Professor: {props.openCourse.comments[0].professor}{" "}
                  </h5>{" "}
                </Col>
                <Col xs={9}>
                  {" "}
                  <p>{props.openCourse.comments[0].comment} </p>{" "}
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
            title="Filter By Semester"
            variant="info"
          >
            <Dropdown.Item>
              <div
                onClick={() => {
                  setsem(["Fall 2019"]);
                }}
              >
                Fall 2019
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div
                onClick={() => {
                  setsem(["Fall 2018"]);
                }}
              >
                Fall 2018
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div
                onClick={() => {
                  setsem(["Fall 2017"]);
                }}
              >
                Fall 2017
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Filter By Professor"
            variant="info"
          >
            <Dropdown.Item>
              <div
                onClick={() => {
                  sortP(["Mahyar"]);
                }}
              >
                Mahyar
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div
                onClick={() => {
                  sortP(["Hudlicka"]);
                }}
              >
                Hudlicka
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      {applyFilter()}
    </div>
  );
}

function getCommentBox(comm_json, classes) {
  if (comm_json.length === 0) {
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
        <div className="card">
          <div className="card-body" style={{ background: "#f7f7f7" }}>
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
