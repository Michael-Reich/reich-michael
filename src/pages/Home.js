import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };
  return (
    <section className="Home mt-5">
      <Helmet title="Home | reich-michael.com" />
      <Container>
        <Row className="align-items-center">
          <Col className="pr-md-5 order-2 order-md-1" md={6}>
            <h1>Hi,</h1>
            <p>
              I'm Michael Reich a young and passionate Actor. On this website
              you can find my filmography and sedcard.
            </p>
            <Link className="btn btn-primary" to="/films">
              Discover films
            </Link>
          </Col>
          <Col className={"mb-5 mb-md-0 order-1 order-md-2"} md={6}>
            <Slider {...settings}>
              <div>
                <img src="/images/me/slide-1.jpg" alt="" />
              </div>
              <div>
                <img src="/images/me/slide-2.jpg" alt="" />
              </div>
              <div>
                <img src="/images/me/slide-3.jpg" alt="" />
              </div>
              <div>
                <img src="/images/me/slide-4.jpg" alt="" />
              </div>
            </Slider>
            {/*<img className="img-fluid" src="/images/me.png" alt="Me & Myself" />*/}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
