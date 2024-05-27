import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-light pt-4 footer">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={6}>
            <div className="text-center">
              <p>
                <b>TASTEBITE</b>
              </p>
              <p>About</p>
              <p>Contact</p>
              <p>Office</p>
              <p>Media Mentions</p>
              <p>Sponsered Content</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6}>
            <div className="text-center">
              <p>
                <b>FOOD&RECIPES</b>
              </p>
              <p>Sugar Free January</p>
              <p>Freezer Meals 101</p>
              <p>Quick and Easy Recipes</p>
              <p>Instant Pot Recipes</p>
              <p>Pasta Recipes</p>
            </div>
          </Col>
          <Col lg={4}>
            <p className="text-center">
              <b>Get in Touch</b>
            </p>
            <div className=" d-flex gap-3 justify-content-center">
              <i class="fa-brands fa-facebook "></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-globe"></i>
            </div>
            <div className="mt-5 text-center">
              <p>What is your opinion of this page</p>
              <h2>🤐 😏 😋 🤗</h2>
            </div>
          </Col>
        </Row>
        <p className="text-center mt-4">
          <i class="fa-regular fa-copyright"></i> 2024 Tastebite / All Rights
          Reserved / Privacy
        </p>
      </Container>
    </div>
  );
}

export default Footer;
