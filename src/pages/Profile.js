import React from 'react';
import {Container, Col, Row, Card, Button, Badge} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

function Profile() {
  return (
    <section className="Profile mt-5">
        <Helmet title="Profile | reich-michael.com" />
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/images/profile.jpg" />
                        <Card.Body>
                            <Card.Title>Michael Reich</Card.Title>
                            <div className="pills mb-2">
                                <Badge pill variant="primary">Founder</Badge>
                                <Badge pill variant="primary" className="ml-1">Designer</Badge>
                                <Badge pill variant="primary" className="ml-1">Developer</Badge>
                            </div>
                            <Card.Text>
                                Hier könnte Ihre Werbung stehen.
                            </Card.Text>
                            <Button href="/images/Michael_Reich.vcf" variant="primary" download><i className="far fa-id-card"></i> Download vCard</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h1>Über mich</h1>
                    <p>Ein kurzer Text über mich folgt hier noch.</p>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Profile;
