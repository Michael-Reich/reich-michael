import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'


import Home from './containers/Home'
import About from './containers/About'
import Topics from './containers/Topics'

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header><HeaderComponent/></Header>
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Content>
          <Footer><FooterComponent/></Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
