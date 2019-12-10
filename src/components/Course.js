import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  Row,
  Col
} from "react-bootstrap";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
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
    if (prof === null && sem === null) {
      return elem;
    } else if (
      prof !== null &&
      sem === null &&
      prof.indexOf(elem.professor) > -1
    ) {
      return elem;
    } else if (
      sem !== null &&
      prof === null &&
      sem.indexOf(elem.semester) > -1
    ) {
      return elem;
    } else if (
      sem !== null &&
      prof !== null &&
      prof.indexOf(elem.professor) > -1 &&
      sem.indexOf(elem.semester) > -1
    ) {
      return elem;
    } else {
      return [];
    }
  }
  function sortP(pname) {
    return setprof(pname);
  }

  function applyFilter() {
    return props.openCourse.comments
      .map(function(x) {
        return filter_comments(x, prof, sem);
      })
      .map(getCommentBox);
  }
  props.openCourse.renderp = applyFilter();

  const handleChange = event => {
    values[event.target.name] = event.target.value;
  };

  function closeModal() {
    window.alert(
      "Your comment on " +
        props.openCourse.courseNumber +
        " has been submitted for review."
    );
    console.log(values);
    setShow(false);
  }

  const [show, setShow] = useState(false);
  const handleSubmit = () => closeModal();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var values = {};

  return (
    <div>
      <Row style={{ marginTop: "20px" }}>
        <Col xs={9} style={{ textAlign: "center" }}>
          <h1>
            {props.openCourse.courseNumber} : {props.openCourse.courseName}
          </h1>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Button size="lg" variant="info" onClick={handleShow}>
            Add Information
          </Button>
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={{ offset: 2 }}>
              <Row style={{ marginTop: "20px" }}>
                <InputLabel>Professor</InputLabel> &nbsp;
                <Select name="professor" onChange={handleChange}>
                  <MenuItem value={"Mahyar"}>Mahyar</MenuItem>
                  <MenuItem value={"Hudlicka"}>Hudlicka</MenuItem>
                </Select>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <InputLabel>Semester</InputLabel> &nbsp;
                <Select name="semester" onChange={handleChange}>
                  <MenuItem value={"Fall 2019"}>Fall 2019</MenuItem>
                  <MenuItem value={"Fall 2018"}>Fall 2018</MenuItem>
                  <MenuItem value={"Fall 2017"}>Fall 2017</MenuItem>
                </Select>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <TextField
                  label="# of Projects"
                  name="projects"
                  onChange={handleChange}
                />
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <TextField
                  label="# of Quizzes"
                  name="quizzes"
                  onChange={handleChange}
                />
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <TextField
                  label="# of Midterms"
                  name="midterms"
                  onChange={handleChange}
                />
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <TextField
                  label="# of Homeworks"
                  name="homeworks"
                  onChange={handleChange}
                />
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <TextField
                  label="# of Readings"
                  name="readings"
                  onChange={handleChange}
                />
              </Row>
            </Col>
            <Col md={{ offset: 1 }}>
              <Row style={{ marginTop: "30px" }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Attendance Required</FormLabel>
                  <RadioGroup name="attendance" onChange={handleChange} row>
                    <FormControlLabel
                      value="Yes"
                      label="Yes"
                      control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                      value="No"
                      label="No"
                      control={<Radio color="primary" />}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Textbook Required</FormLabel>
                  <RadioGroup name="textbook" onChange={handleChange} row>
                    <FormControlLabel
                      value="Yes"
                      label="Yes"
                      control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                      value="No"
                      label="No"
                      control={<Radio color="primary" />}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Lectures Posted</FormLabel>
                  <RadioGroup name="lectures" onChange={handleChange} row>
                    <FormControlLabel
                      value="Yes"
                      label="Yes"
                      control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                      value="No"
                      label="No"
                      control={<Radio color="primary" />}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Echo360 Recordings</FormLabel>
                  <RadioGroup name="echo" onChange={handleChange} row>
                    <FormControlLabel
                      value="Yes"
                      label="Yes"
                      control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                      value="No"
                      label="No"
                      control={<Radio color="primary" />}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
              <Row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Final Exam</FormLabel>
                  <RadioGroup name="final" row>
                    <FormControlLabel
                      value="Yes"
                      label="Yes"
                      control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                      value="No"
                      label="No"
                      control={<Radio color="primary" />}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginLeft: "20px", marginTop: "20px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tags</FormLabel>
              <FormGroup name="tags" onChange={handleChange} row>
                <FormControlLabel
                  value="Discussion"
                  control={<Checkbox color="primary" />}
                  label="Discussion"
                />
                <FormControlLabel
                  value="Lab"
                  control={<Checkbox color="primary" />}
                  label="Lab"
                />
                <FormControlLabel
                  value="Reading Heavy"
                  control={<Checkbox color="primary" />}
                  label="Reading Heavy"
                />
                <FormControlLabel
                  value="Lecture Heavy"
                  control={<Checkbox color="primary" />}
                  label="Lecture Heavy"
                />
                <FormControlLabel
                  value="Paper"
                  control={<Checkbox color="primary" />}
                  label="Paper"
                />
                <FormControlLabel
                  value="Group Work"
                  control={<Checkbox color="primary" />}
                  label="Group Work"
                />
                <FormControlLabel
                  value="Project Based"
                  control={<Checkbox color="primary" />}
                  label="Project Based"
                />
                <FormControlLabel
                  value="Bad Professor"
                  control={<Checkbox color="primary" />}
                  label="Bad Professor"
                />
                <FormControlLabel
                  value="Great Professor"
                  control={<Checkbox color="primary" />}
                  label="Great Professor"
                />
                <FormControlLabel
                  value="Fun Class"
                  control={<Checkbox color="primary" />}
                  label="Fun Class"
                />
                <FormControlLabel
                  value="Boring"
                  control={<Checkbox color="primary" />}
                  label="Boring"
                />
              </FormGroup>
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <InputLabel>Comment</InputLabel>
              <Input name="comment" onChange={handleChange} />
            </FormControl>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            Add Information
          </Button>
        </Modal.Footer>
      </Modal>
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
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Button
            size="sm"
            variant="info"
            onClick={() => {
              sortP(null);
              setsem(null);
            }}
          >
            Clear Filters
          </Button>
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
