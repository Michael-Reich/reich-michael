import React, { useEffect, useState } from "react";
import { Container, Col, Row, Spinner, Alert } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { FilmItems } from "../content";

const FilmsDetail = () => {
  const { slug } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData(path) {
      const file = await import(`../${path}`);
      const response = await fetch(file.default);
      const text = await response.text();
      return text;
    }

    if (slug) {
      const blogDetail = FilmItems.filter((item) => item.slug === slug);

      if (blogDetail[0]) {
        const markdown = fetchData(blogDetail[0].markdown);
        markdown.then((text) => {
          setBlogDetail({
            ...blogDetail[0],
            markdown: text,
          });
        });
      } else {
        setError(true);
      }
    }
  }, [slug]);

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="info">
          No blog post found, please try another one.
        </Alert>
      </Container>
    );
  }

  if (
    Object.keys(blogDetail).length !== 0 &&
    blogDetail.constructor === Object
  ) {
    const blog = blogDetail;
    return (
      <section className="BlogDetail mt-5">
        <Helmet title={`${blog.title} | reich-michael.com`} />
        <Container>
          <Row>
            <Col md={12}>
              <h1>{blog.title}</h1>
              <ReactMarkdown escapeHtml={false} source={blog.markdown} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else {
    return (
      <Container className="mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }
};

export default FilmsDetail;
