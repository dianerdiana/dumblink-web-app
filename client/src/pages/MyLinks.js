import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import FormSearch from "../components/FormSearch";

// import navbar icon
import {
  TemplateInactive,
  ProfileInactive,
  MyLinkActive,
} from "../components/IconGroup";
import CardLink from "../components/CardLink";

export default () => {
  return (
    <Container fluid>
      <Row>
        <Navbar
          templateItem={<TemplateInactive />}
          profileItem={<ProfileInactive />}
          myLinkItem={<MyLinkActive />}
        />
        <Col md={9} className="p-0">
          <div className="bg-white py-3 mb-4">
            <h4 className="py-1 ms-4 f-bold">My Links</h4>
          </div>
          <div className="bg-gray vh-90 pt-5 p-3">
            <FormSearch linksTotal="1" />
            <CardLink />
            <CardLink />
            <CardLink />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
