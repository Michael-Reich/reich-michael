import React, { Component } from "react";
import { Row, Col } from 'antd';

class About extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
    )
  }
}

export default About
