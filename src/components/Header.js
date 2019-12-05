import React from "react";
import { Switch, Route } from "react-router-dom";

import SearchHeader from "./SearchHeader";
import DefaultHeader from "./DefaultHeader";

// The Header creates links that can be used to navigate
// between routes.

function HeaderBar() {
  return (
    <header>
      <Switch>
        <Route exact path="/" component={SearchHeader} />
        <Route path="/course" component={DefaultHeader} />
        <Route path="/results" component={DefaultHeader} />
        <Route path="/add" component={DefaultHeader} />
      </Switch>
    </header>
  );
}

export default function Header() {
  return <HeaderBar />;
}
