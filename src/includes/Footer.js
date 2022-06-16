import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="main-footer mt-5">
        <Container>
          <Row>
            <Col className={"text-center text-md-left"} md={6}>
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-4">Social Media</li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/notmichaelreich/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <div className="flex"></div>
            </Col>
            <Col className="text-center text-md-right my-4 my-md-0">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-4">
                  <Link to="/sedcard">My Sedcard</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/imprint">Imprint</Link>
                </li>
                <li className="list-inline-item">
                  <Link className="hidden" to="/linktree">
                    Linktree
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
