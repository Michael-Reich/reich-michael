import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Row, Col, Card, List, Avatar } from "antd"
import {  } from 'antd';

// IMG
import me from '../assets/images/me.png'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  }
];

class Home extends Component {

  render() {
    return (
      <div id="home">
        <div className="intro container">
          <Row>
            <Col span={12}>
              <h2>Funny few intro words</h2>
              <p className="lead">My name is Michael Reich and I am a founder, designer and developer based in Munich, Germany. At the moment I work as Freelancer. Also I'm working on epic projects like trefox.</p>
            </Col>
            <Col span={12}>
              <img style={{ width: '100%' }} src={me} alt=""/>
            </Col>
          </Row>
        </div>
        <div className="blog">
          <div className="blog-content container">
            <Row>
              <Col className="blog-intro" span={12}>
                <h2>My Ideas</h2>
                <p>Based on the Ant Design language, we have provided a suite of out-of-the-box with high quality for developing and serving enterprise background applications,including the official React implementation and Angular, Vue implementations</p>
              </Col>
              <Col className="blog-items" span={12}>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </div>

        </div>
      </div>
    )
  }
}

export default Home
