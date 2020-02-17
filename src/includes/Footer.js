import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="main-footer mt-5">
      <Container>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/impressum">Impressum</Link>
          </li>
          <li className="list-inline-item">
            <Link className="hidden" to="/linktree">Linktree</Link>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
export default Footer;
