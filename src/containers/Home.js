import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd"

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/about"><Button type="primary">Start</Button></Link>
  </div>
);

export default Home
