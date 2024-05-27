import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary shadow py-2 position-sticky"
      >
        <Container>
          <Navbar.Brand className="logoname">
            <Link to={"/"} style={{ color: "orangered" }}>
              <img
                src="/images/logotxt.png"
                alt=""
                style={{ height: "40px" }}
              />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 togglebtn shadow-none"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  fw-bold">
              <Nav.Link className="l1 me-4">
                <Link to={"/"}> Home</Link>
              </Nav.Link>
              <Nav.Link href="#link" className="l1  me-4 text-muted">
                <Link> About</Link>
              </Nav.Link>
              <Nav.Link href="#link" className="l1  me-4">
                <Link> Recipes</Link>
              </Nav.Link>
              <Nav.Link href="#link" className="l1  me-4">
                <Link> Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
