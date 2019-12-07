import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import Course from "./Course";
import Results from "./Results";
import Dialog from "./CourseDialog";
import AddComponent from "./Add";
import Add from "./Add";

// The Main component renders one of the provided
// Routes (provided that one matches). Both the /results
// and /course routes will match any pathname that starts
// with /results or /course. The / route will only match
// when the pathname is exactly the string "/"
function Main(props) {
  const [openCourse, setOpenCourse] = useState(null);

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Search querry={props.querry} setQuerry={props.setQuerry} />
          )}
        />
        <Route
          path="/course"
          component={() => <Course openCourse={openCourse} />}
        />
        <Route
          path="/results"
          component={() => (
            <Results
              querry={props.querry}
              setQuerry={props.setQuerry}
              setOpenCourse={setOpenCourse}
            />
          )}
        />
        <Route path="/dialog" component={Dialog} />
        <Route path="/add" component={Add} />
      </Switch>
    </main>
  );
}

export default Main;
