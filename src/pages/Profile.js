import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Profile() {
  return (
    <section className="Profile mt-5">
      <Helmet title="Profile | reich-michael.com" />
      <Container>
        <Row>
          <Col className="mb-3 mb-md-0" md={4}>
            <Card>
              <Card.Img variant="top" src="/images/profile2.jpg" />
              <Card.Body>
                <Card.Title>Michael Reich</Card.Title>
                {/*<Button*/}
                {/*  href="/images/Michael_Reich.vcf"*/}
                {/*  variant="primary"*/}
                {/*  download*/}
                {/*>*/}
                {/*  <i className="far fa-address-card"></i> Download vCard*/}
                {/*</Button>*/}

                <Link to="/sedcard">
                  <Button className="mt-2" variant="primary">
                    <i className="far fa-file"></i> Download Secard
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h1>About me</h1>
            <p>
              Michael started to take acting seriously this year 2022. Since
              then he already gained experience through tv ad commercials or
              smaller budget shoots for independent films and short films.
            </p>
            <p>
              He practices acting with several coaches and has done several
              pieces of training to improve his talent. In August 2022 he will
              also attend a one-month-long acting training in London to improve
              his skills.
            </p>
            <p>
              Willing to work around the globe and passionate about acting
              Michael will further find his way into the film business.
            </p>
            <p>
              If you have any specific questions, please don't hesitate and
              contact him{" "}
              <a href="mailto:hello@reich-michael.com">
                hello@reich-michael.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;
