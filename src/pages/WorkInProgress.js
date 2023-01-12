import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="Home mt-5">
      <Helmet title="Home | reich-michael.com" />
      <Container>
        <Row className="align-items-center">
          <Col className="pr-md-5 order-2 order-md-1" md={6}>
            <h1>Site currently under maintenance</h1>
            <p>The site will be back soon!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
