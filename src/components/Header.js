import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';

// IMG
import logo from '../assets/images/logo.svg'

class HeaderComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '69px' }}
        >
          <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/topics'>Topics</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}



export default HeaderComponent
