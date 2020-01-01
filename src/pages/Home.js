import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Home() {
  return (
    <section className="Home mt-5">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h1>Hi.</h1>
                    <p>My name is Michael Reich and I am a founder, designer and developer based in Munich, Germany. At the moment I work as Freelancer. Also I'm working on epic projects like <a href="https://trefox.com">trefox</a>.</p><p>Things I love about working on projects of any kind is to learn new things and help users to get their best experience possible.</p>
                    <a class="btn btn-primary" href="/profile/">About me</a>
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src="/images/me.png" alt="Me & Myself"/>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Home;
