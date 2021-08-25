import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <section className="Home mt-5">
        <Helmet title="Home | reich-michael.com" />
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h1>Servus!</h1>
                    <p>Text folgt ...</p>
                    <Link className="btn btn-primary" to="/profile">Mehr über mich</Link>
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
