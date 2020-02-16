import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

function Home() {
  return (
    <section className="Linktree mt-5">
        <Helmet title="Linktree | reich-michael.com" />
        <Container>
            <Row className="align-items-center">
              <Col>
                <Button className="digitalwunder" variant="primary" href="https://digitalwunder.io" block>digitalwunder.io <i class="fas fa-external-link-square-alt"></i></Button>
                <Button className="soundcloud" variant="primary" href="https://soundcloud.com/bonzmann" block>Bonzmann <i class="fab fa-soundcloud"></i></Button>
                <Button className="dwio" variant="primary" href="https://dwio1.com" block>dwio1 <i class="fas fa-external-link-square-alt"></i></Button>

              </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Home;
