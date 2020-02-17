import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header({location, history}) {

  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location.pathname])

  return (
    <header className="main-navigation">
      <Navbar expand="lg">
        <Container>
          <Link className="nav-brand" to="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/blog">Blog</Link>
              <a className="nav-link" href="mailto:hello@reich-michael.com"><i className="fas fa-paper-plane"></i></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default withRouter(Header);
