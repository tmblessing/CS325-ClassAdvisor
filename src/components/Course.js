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
import {ButtonGroup, InputGroup, FormControl, Modal, Button, Dropdown, DropdownButton, Row, Col} from "react-bootstrap";
import Add from "./Add";
import { borderBottom } from "@material-ui/system";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Chip from "@material-ui/core/Chip";

//Using both makeStyles to make a style sheet and createTheme
//to make a theme is stupid but I'm not smart enough to rewrite
//this style sheet in a way that it works as a theme.
//-Tom
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "100%",
    alignItems: "center", "margin-top": "300px",
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

export default function CourseComponent() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Row style={{marginTop: '20px'}}>
        <Col xs={9} style={{textAlign: 'center'}}>
        <h1>COMPSCI 325: Human-Computer Interaction</h1>
        </Col>
        <Col style={{textAlign: 'center'}}>
        <Button size="lg" variant="info" onClick={handleShow}>Add Information</Button>
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col style={{textAlign: 'center'}}>
              <DropdownButton id="dropdown-basic-button" title="Semester Taken" variant="info">
                <Dropdown.Item href="#/action-1">Fall 2019</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Fall 2018</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Fall 2017</Dropdown.Item>
              </DropdownButton>
              </Col>
              <Col style={{textAlign: 'center'}}>
              <DropdownButton id="dropdown-basic-button" title="Professor Taken" variant="info">
                <Dropdown.Item href="#/action-1">Mahyar</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hudlicka</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row style={{marginTop:'20px'}}>
            <Col style={{textAlign: 'left'}}>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Number of Projects</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
            <Col style={{textAlign: 'right'}}>
            Attendance Required? &nbsp;
            <ButtonGroup title="Attendance" aria-label="Basic example">
              <Button variant="secondary">Yes</Button>
              <Button variant="secondary">No</Button>
            </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign: 'left'}}>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Number of Quizzes</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
            <Col style={{textAlign: 'right'}}>
            Textbook Required? &nbsp;
            <ButtonGroup title="Attendance" aria-label="Basic example">
              <Button variant="secondary">Yes</Button>
              <Button variant="secondary">No</Button>
            </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign: 'left'}}>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Number of Midterms</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
            <Col style={{textAlign: 'right'}}>
            Lectures Posted? &nbsp;
            <ButtonGroup title="Attendance" aria-label="Basic example">
              <Button variant="secondary">Yes</Button>
              <Button variant="secondary">No</Button>
            </ButtonGroup>
            </Col> 
          </Row>
          <Row>
            <Col style={{textAlign: 'left'}}>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Number of Homeworks</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
            <Col style={{textAlign: 'right'}}>
            Echo360 Recordings? &nbsp;
            <ButtonGroup title="Attendance" aria-label="Basic example">
              <Button variant="secondary">Yes</Button>
              <Button variant="secondary">No</Button>
            </ButtonGroup>
            </Col> 
          </Row>
          <Row>
            <Col style={{textAlign: 'left'}}>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Number of Readings</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
            <Col style={{textAlign: 'right'}}>
            Final Exam? &nbsp;
            <ButtonGroup title="Attendance" aria-label="Basic example">
              <Button variant="secondary">Yes</Button>
              <Button variant="secondary">No</Button>
            </ButtonGroup>
            </Col> 
          </Row>
          <Row>
            <Col style={{textAlign:'center'}}>
            GenEd Tags: &nbsp;
              <Button variant="outline-secondary">R1</Button> &nbsp;
              <Button variant="outline-secondary">R2</Button> &nbsp;
              <Button variant="outline-secondary">DG</Button> &nbsp;
              <Button variant="outline-secondary">DU</Button> &nbsp;
              <Button variant="outline-secondary">PS</Button> &nbsp;
              <Button variant="outline-secondary">CW</Button> &nbsp;
              <Button variant="outline-secondary">BS</Button> &nbsp;
              <Button variant="outline-secondary">AT</Button> &nbsp;
              <Button variant="outline-secondary">SB</Button> &nbsp;
              <Button variant="outline-secondary">I</Button> &nbsp;
              <Button variant="outline-secondary">SI</Button> &nbsp;
              <Button variant="outline-secondary">AL</Button> &nbsp;
              <Button variant="outline-secondary">HS</Button>
            </Col>
          </Row>
          <Row style={{marginTop:'20px'}}>
            <Col style={{textAlign:'center'}}>
            Tags: &nbsp;
              <Button variant="outline-secondary">Lecture Heavy</Button> &nbsp;
              <Button variant="outline-secondary">Reading Heavy</Button> &nbsp;
              <Button variant="outline-secondary">Discussion</Button> &nbsp;
              <Button variant="outline-secondary">Pop Quiz</Button> &nbsp;
              <Button variant="outline-secondary">Papers</Button> &nbsp;
              <Button variant="outline-secondary">Presentation</Button> &nbsp;
              <Button variant="outline-secondary">Group Work</Button> &nbsp;
              <Button variant="outline-secondary">Project Based</Button> &nbsp;
              <Button variant="outline-secondary">Fun Class</Button> &nbsp;
              <Button variant="outline-secondary">Boring</Button> &nbsp;
              <Button variant="outline-secondary">Great Professor</Button> &nbsp;
              <Button variant="outline-secondary">Bad Professor</Button>
            </Col>
          </Row>
          <Row style={{marginTop:'20px'}}>
            <Col>
              <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Comments</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              </InputGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row style={{marginTop: '30px', marginLeft: '60px'}}>
        <Col xs={2}>
          <h4>Projects:</h4>
          <h4>Quizzes:</h4>
          <h4>Midterms:</h4>
          <h4>Homeworks:</h4>
          <h4>Readings:</h4>
        </Col>
        <Col xs={1} style={{textAlign: 'center'}}>
          <h4>1</h4>
          <h4>6</h4>
          <h4>1</h4>
          <h4>5</h4>
          <h4>N/A</h4>
        </Col>
        <Col xs={3}>
          <h4>Attendance Required:</h4>
          <h4>Textbook Required:</h4>
          <h4>Lectures Posted:</h4>
          <h4>Echo360 Recordings:</h4>
          <h4>Final Exam:</h4>
        </Col>
        <Col xs={1} style={{textAlign: 'center'}}>
          <h4>No</h4>
          <h4>No</h4>
          <h4>Yes</h4>
          <h4>No</h4>
          <h4>No</h4>
        </Col>
      </Row>
      <Row style={{marginTop: '30px'}}>
        <Col style={{marginRight: '50px', marginLeft: '50px'}}>
        <div class="card">
          <div class="card-body" style={{background: '#f7f7f7'}}>
          <Row>
            <Col style={{textAlign: 'left'}}>
              <h4 class="card-title">Top Comment</h4>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <h4 class="card-title"><ThumbUpIcon/> &nbsp; 16 &nbsp; &nbsp; <ThumbDownIcon/> &nbsp; 1</h4>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Semester: Fall 2019 </h5> </Col>
            <Col xs={9}>
            <div className={classes.tags}>
              <Chip size="small" label="Project Based" />
              <Chip size="small" label="Readings" />
              <Chip size="small" label="Pop Quiz" />
              <Chip size="small" label="Group Work" />
            </div>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Professor: Mahyar </h5> </Col>
            <Col xs={9}> <p>This class was very helpful in doung all this cool stuff. This class was very helpful in doung all this cool stuff. This class was very helpful in doung all this cool stuff. This class was very helpful in doung all this cool stuff. This class was very helpful in doung all this cool stuff. </p> </Col>
          </Row>
          </div>
        </div>
        </Col>
      </Row>
      <Row style={{marginTop: '30px'}}>
        <Col style={{textAlign: 'center'}}>
        <DropdownButton id="dropdown-basic-button" title="Sort By Semester" variant="info">
          <Dropdown.Item href="#/action-1">Fall 2019</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Fall 2018</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Fall 2017</Dropdown.Item>
        </DropdownButton>
        </Col>
        <Col style={{textAlign: 'center'}}>
        <DropdownButton id="dropdown-basic-button" title="Sort By Professor" variant="info">
          <Dropdown.Item href="#/action-1">Mahyar</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Hudlicka</Dropdown.Item>
        </DropdownButton>
        </Col>
      </Row>
      <Row style={{marginTop: '30px'}}>
        <Col style={{marginRight: '50px', marginLeft: '50px'}}>
        <div class="card">
          <div class="card-body" style={{background: '#f7f7f7'}}>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Semester: Fall 2019 </h5> </Col>
            <Col xs={5}>
            <div className={classes.tags}>
              <Chip size="small" label="Project Based" />
              <Chip size="small" label="Readings" />
              <Chip size="small" label="Pop Quiz" />
              <Chip size="small" label="Group Work" />
            </div>
            </Col>
            <Col xs={4} style={{textAlign: 'right'}}>
              <p><ThumbUpIcon/> &nbsp; 16 &nbsp; &nbsp; <ThumbDownIcon/> &nbsp; 1</p>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Professor: Mahyar </h5> </Col>
            <Col xs={9}> <p>Worked through the design thinking process. There is a group web design project instegated in 5 stages: empathize, define, ideate, prototype, and est.</p> </Col>
          </Row>
          </div>
        </div>
        </Col>
      </Row>
      <Row style={{marginTop: '10px'}}>
        <Col style={{marginRight: '50px', marginLeft: '50px'}}>
        <div class="card">
          <div class="card-body" style={{background: '#f7f7f7'}}>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Semester: Fall 2018 </h5> </Col>
            <Col xs={5}>
            <div className={classes.tags}>
              <Chip size="small" label="Project Based" />
              <Chip size="small" label="Group Work" />
            </div>
            </Col>
            <Col xs={4} style={{textAlign: 'right'}}>
              <p><ThumbUpIcon/> &nbsp; 9 &nbsp; &nbsp; <ThumbDownIcon/> &nbsp; 2</p>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Professor: Hudlicka </h5> </Col>
            <Col xs={9}> <p>Covered different aspects of design, like research and prototyping. Worked on a group design project.</p> </Col>
          </Row>
          </div>
        </div>
        </Col>
      </Row>
      <Row style={{marginTop: '10px'}}>
        <Col style={{marginRight: '50px', marginLeft: '50px'}}>
        <div class="card">
          <div class="card-body" style={{background: '#f7f7f7'}}>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Semester: Fall 2017 </h5> </Col>
            <Col xs={5}>
            <div className={classes.tags}>
              <Chip size="small" label="Fun Class" />
            </div>
            </Col>
            <Col xs={4} style={{textAlign: 'right'}}>
              <p><ThumbUpIcon/> &nbsp; 0 &nbsp; &nbsp; <ThumbDownIcon/> &nbsp; 3</p>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={3}> <h5>Professor: Hudlicka </h5> </Col>
            <Col xs={9}> <p>Thought it was a cool class.</p> </Col>
          </Row>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    
  );
}