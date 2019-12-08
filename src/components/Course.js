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
import Typography from "@material-ui/core/Typography";

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

  const classes = useStyles();
  // for (var i = 0; i < json_data.length; i++) {
  // var obj = json_data[i];
  // if (obj.course_number === course_number) {
  //       return getPage(obj, classes);
  //     }
  //     console.log(obj.id);
  //   }
  // }

  //Error catching
  if (props.openCourse === null) {
    console.log("No course selected");
    return <h1>Error 404 Course not found</h1>;
  } else {
    console.log(props.openCourse.courseNumber);
    return getPage(props.openCourse, classes);
  }
}

function getCommentBox(comm_json, classes) {
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
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Row style={{ marginTop: "30px", marginLeft: "50px" }}>
          <Col xs={8}>
            <Typography variant="h4">
              {props.courseNumber} : {props.courseName}
            </Typography>
            <Typography component="p">{props.description}</Typography>
          </Col>

          <Col sm="auto" style={{ textAlign: "center" }}>
            <Link to="/add">
              <Button size="lg" variant="info">
                Add Information
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px", marginLeft: "60px" }}>
          <Col xs={2}>
            <Typography variant="h5">Projects:</Typography>
            <Typography variant="h5">Quizzes:</Typography>
            <Typography variant="h5">Midterms:</Typography>
            <Typography variant="h5">Homeworks:</Typography>
            <Typography variant="h5">Readings:</Typography>
          </Col>

          <Col xs={1} style={{ textAlign: "center" }}>
            <Typography variant="h5">{props.comments[0].projects}</Typography>
            <Typography variant="h5">{props.comments[0].quizzes}</Typography>
            <Typography variant="h5">{props.comments[0].midterms}</Typography>
            <Typography variant="h5">{props.comments[0].homeworks}</Typography>
            <Typography variant="h5">{props.comments[0].readings}</Typography>
          </Col>
          <Col xs={3}>
            <Typography variant="h5">Attendance Required:</Typography>
            <Typography variant="h5">Textbook Required:</Typography>
            <Typography variant="h5">Lectures Posted:</Typography>
            <Typography variant="h5">Echo360 Recordings:</Typography>
            <Typography variant="h5">Final Exam:</Typography>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <Typography variant="h5">{props.comments[0].attendance}</Typography>
            <Typography variant="h5">{props.comments[0].textbook}</Typography>
            <Typography variant="h5">{props.comments[0].lectures}</Typography>
            <Typography variant="h5">{props.comments[0].echo360}</Typography>
            <Typography variant="h5">{props.comments[0].final}</Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
            <div class="card">
              <div class="card-body" style={{ background: "#f7f7f7" }}>
                <Row>
                  <Col style={{ textAlign: "left" }}>
                    <Typography variant="h5" class="card-title">
                      Top Comment
                    </Typography>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <Typography variant="h5" class="card-title">
                      <ThumbUpIcon /> &nbsp; 16 &nbsp; &nbsp; <ThumbDownIcon />{" "}
                      &nbsp; 1
                    </Typography>
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>{props.comments[0].semester}</h5>{" "}
                  </Col>
                  <Col xs={9}>
                    <div className={classes.tags}>
                      {chips(props.tags)}
                      {/* <Chip size="small" label="Project Based" />
                          <Chip size="small" label="Readings" />
                          <Chip size="small" label="Pop Quiz" />
                          <Chip size="small" label="Group Work" /> */}
                      </div>
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
        <Row style={{ marginTop: "30px" }}>
          <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
            <div class="card">
              <div class="card-body" style={{ background: "#f7f7f7" }}>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Semester: Fall 2019 </h5>{" "}
                  </Col>
                  <Col xs={5}>
                    <div className={classes.tags}>
                      <Chip size="small" label="Project Based" />
                      <Chip size="small" label="Readings" />
                      <Chip size="small" label="Pop Quiz" />
                      <Chip size="small" label="Group Work" />
                    </div>
                  </Col>
                  <Col xs={4} style={{ textAlign: "right" }}>
                    <p>
                      <ThumbUpIcon /> &nbsp; 16 &nbsp; &nbsp; <ThumbDownIcon />{" "}
                      &nbsp; 1
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Professor: Mahyar </h5>{" "}
                  </Col>
                  <Col xs={9}>
                    {" "}
                    <p>
                      Worked through the design thinking process. There is a
                      group web design project instegated in 5 stages:
                      empathize, define, ideate, prototype, and est.
                    </p>{" "}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        {/* if(json_data.length > 0){
      return array.map(function(each){
      return();
    });
  } else {
    return [];
} */}
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
            <div class="card">
              <div class="card-body" style={{ background: "#f7f7f7" }}>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Semester: Fall 2018 </h5>{" "}
                  </Col>
                  <Col xs={5}>
                    <div className={classes.tags}>
                      <Chip size="small" label="Project Based" />
                      <Chip size="small" label="Group Work" />
                    </div>
                  </Col>
                  <Col xs={4} style={{ textAlign: "right" }}>
                    <p>
                      <ThumbUpIcon /> &nbsp; 9 &nbsp; &nbsp; <ThumbDownIcon />{" "}
                      &nbsp; 2
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Professor: Hudlicka </h5>{" "}
                  </Col>
                  <Col xs={9}>
                    {" "}
                    <p>
                      Covered different aspects of design, like research and
                      prototyping. Worked on a group design project.
                    </p>{" "}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
            <div class="card">
              <div class="card-body" style={{ background: "#f7f7f7" }}>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Semester: Fall 2017 </h5>{" "}
                  </Col>
                  <Col xs={5}>
                    <div className={classes.tags}>
                      <Chip size="small" label="Fun Class" />
                    </div>
                  </Col>
                  <Col xs={4} style={{ textAlign: "right" }}>
                    <p>
                      <ThumbUpIcon /> &nbsp; 0 &nbsp; &nbsp; <ThumbDownIcon />{" "}
                      &nbsp; 3
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col xs={3}>
                    {" "}
                    <h5>Professor: Hudlicka </h5>{" "}
                  </Col>
                  <Col xs={9}>
                    {" "}
                    <p>Thought it was a cool class.</p>{" "}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
