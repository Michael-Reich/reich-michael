import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';

import {BlogItems} from '../blog';

function Blog() {
  const sortedBlogItems = BlogItems.reverse();

    return (
        <section className="Blog mt-5">
            <Helmet title="Profile | reich-michael.com" />
            <Container>
                <Row className="mb-3">
                    <Col md={12}>
                        <h1>Blog</h1>
                    </Col>
                </Row>
                <Row>

                    {sortedBlogItems.map((item, index) => {
                        return (
                            <Col md={4} key={index} className={'mb-4'}>
                                <Card>
                                    {item.previewImage && <Card.Img variant="top" src="holder.js/100px180" />}
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                          {item.previewText}
                                        </Card.Text>
                                        <Link className="btn btn-primary" to={`/blog/${item.slug}`}>Lesen</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Blog;
