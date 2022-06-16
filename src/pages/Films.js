import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { FilmItems } from "../content";

function Films() {
  const sortedBlogItems = FilmItems.reverse();

  return (
    <section className="Blog mt-5">
      <Helmet title="Profile | reich-michael.com" />
      <Container>
        <Row className="mb-3">
          <Col md={12}>
            <h1>Films</h1>
          </Col>
        </Row>
        <Row>
          {sortedBlogItems.map((item, index) => {
            return (
              <Col md={12} key={index} className={"mb-4"}>
                <Card>
                  {item.previewImage && (
                    <Card.Img variant="top" src="holder.js/100px180" />
                  )}
                  <Card.Body>
                    <Card.Title>
                      {item.title} ({item.year})
                    </Card.Title>
                    <Card.Text>{item.previewText}</Card.Text>
                    {item.readmore && (
                      <Link
                        className="btn btn-primary"
                        to={`/films/${item.slug}`}
                      >
                        Read more
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Films;
