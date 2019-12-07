import React from "react";
import { Switch, Route } from "react-router-dom";

import SearchHeader from "./SearchHeader";
import DefaultHeader from "./DefaultHeader";

// The Header creates links that can be used to navigate
// between routes.

function HeaderBar(props) {
  return (
    <header>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <SearchHeader querry={props.querry} setQuerry={props.setQuerry} />
          )}
        />
        <Route
          path="/course"
          component={() => (
            <DefaultHeader querry={props.querry} setQuerry={props.setQuerry} />
          )}
        />
        <Route
          path="/results"
          component={() => (
            <DefaultHeader querry={props.querry} setQuerry={props.setQuerry} />
          )}
        />
        <Route
          path="/add"
          component={() => (
            <DefaultHeader querry={props.querry} setQuerry={props.setQuerry} />
          )}
        />
      </Switch>
    </header>
  );
}

export default function Header() {
  return <HeaderBar />;
}
