import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './includes/Header';
import Footer from './includes/Footer';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Linktree from './pages/Linktree';

function Routes() {
    return (
        <Router>
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
            <Footer/>
        </Router>
    )
}
export default Routes;
