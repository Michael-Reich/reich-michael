import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./includes/Header";

import Profile from "./pages/Profile";
import Films from "./pages/Films";
import FilmsDetail from "./pages/FilmsDetail";
import Linktree from "./pages/Linktree";
import Imprint from "./pages/Imprint";
import Sedcard from "./pages/Sedcard";
import WorkInProgress from "./pages/WorkInProgress";

function Routes() {
  return (
    <Router>
      <Header />
      <div className="page-body">
        <Switch>
          <Route exact path="/">
            <WorkInProgress />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/films/:slug">
            <FilmsDetail />
          </Route>
          <Route exact path="/linktree">
            <Linktree />
          </Route>
          <Route exact path="/imprint">
            <Imprint />
          </Route>
          <Route exact path="/sedcard">
            <Sedcard />
          </Route>
        </Switch>
      </div>
      {/*<Footer />*/}
    </Router>
  );
}
export default Routes;
