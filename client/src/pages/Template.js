import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

// import navbar icon
import {
  MyLinkInactive,
  ProfileInactive,
  TemplateActive,
} from "../components/IconGroup";

export default () => {
  return (
    <Container fluid>
      <Row>
        <Navbar
          templateItem={<TemplateActive />}
          profileItem={<ProfileInactive />}
          myLinkItem={<MyLinkInactive />}
        />
        <Col md={9} className="p-0">
          <div className="bg-white py-3 mb-4">
            <h4 className="py-1 ms-4 f-bold">Template</h4>
          </div>
          <div className="bg-gray vh-90 pt-5 ps-1">
            <Link to="/choose-template">
              <Image src="/assets/images/phone-1.png" />
            </Link>
            <Link to="/">
              <Image src="/assets/images/phone-2.png" />
            </Link>
            <Link to="/">
              <Image src="/assets/images/phone-3.png" />
            </Link>
            <Link to="/">
              <Image src="/assets/images/phone-4.png" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
