import React, { useState } from "react";

import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Image,
} from "react-bootstrap";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Navbar className="bg-light">
          <Container>
            <Navbar.Brand>
              <Image src="/assets/icons/navbar-brand.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as="button"
                  onClick={() => setShowLogin(true)}
                  className="f-bold fw-bold px-4 me-4 text-dark ol-none bg-light"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as="button"
                  onClick={() => setShowRegister(true)}
                  className="btn text-white f-bold bg-dumblink fw-bold px-4 rounded-8"
                >
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="bg-hero align-items-center">
        <Col>
          <Container>
            <Row>
              <Col>
                <h1 className="display-3 text-white">
                  The Only Link You’ll Ever Need
                </h1>
                <p className="text-white fs-5 w-80 f-light mt-3">
                  Add a link for your Social Bio and optimize your
                  <br />
                  social media traffic.
                  <br />
                  <br />
                  safe, fast and easy to use
                </p>
                <Button
                  onClick={() => navigate("/tTNlRES")}
                  variant="dark"
                  className="rounded-8 px-5 py-2 mt-5"
                >
                  Get Started For Free
                </Button>
              </Col>
              <Col className="text-center d-flex align-items-center">
                <Image
                  className="img-fluid"
                  src="/assets/images/pc-phone.png"
                />
                <Image />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <Register show={showRegister} onHide={() => setShowRegister(false)} />
    </Container>
  );
};
