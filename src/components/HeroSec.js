import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HeroSec() {
  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <img
              src="images/hero.png"
              alt=""
              className="heroimg animate__animated animate__slideInLeft"
            />
          </Col>
          <Col lg={6} md={6}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="herotxt">
                <h1>Make Your</h1>
                <h1
                  style={{ color: "orangered" }}
                  className="animate__animated animate__bounce"
                >
                  Dream Food
                </h1>
                <h1>With Us</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col lg={4} md={4}>
            <div className="ms-2 mt-2">
              <h4 className="m-0 fw-bold">5K+</h4>
              <p className="m-0">Review</p>
              <h4 className="m-0 fw-bold">200+</h4>
              <p className="m-0">Comments</p>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="reviewimg mt-2">
              <img src="images/Reviews.png" alt="" />
              <div className="reviewtxt">
                <p className="m-0 fw-bold"> 500+ Happy Customer</p>
                <p>4.8 Rating(5000+ Review)</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="d-flex mt-2">
              <div className="foodimg">
                <img
                  src="https://cdn.dummyjson.com/recipe-images/1.webp"
                  alt=""
                />
              </div>
              <div className="ms-3 mt-3">
                <p className="m-0 fw-bold">Best Delicious Food</p>
                <p>
                  We are best collection <br />
                  of food recipes
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSec;
