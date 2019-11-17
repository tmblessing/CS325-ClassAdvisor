import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import Course from "./Course";
import Results from "./Results";

// The Main component renders one of the provided
// Routes (provided that one matches). Both the /results
// and /course routes will match any pathname that starts
// with /results or /course. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/course" component={Course} />
      <Route path="/results" component={Results} />
    </Switch>
  </main>
);

export default Main;
