import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './includes/Header';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Linktree from './pages/Linktree';

const history = createBrowserHistory();

ReactGA.initialize('UA-158657525-1');

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


function Routes() {
    return (
        <Router history={history}>
            <Header />
            <div className="page-body">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/blog/:slug">
                        <BlogDetail />
                    </Route>
                    <Route exact path="/linktree">
                        <Linktree />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default Routes;
