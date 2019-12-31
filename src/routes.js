import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './includes/Header';

import Home from './pages/Home';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Routes() {
    return (
        <Router>
            <Header />
            <div className="page-body">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default Routes;
