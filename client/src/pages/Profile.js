import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import FormProfile from "../components/FormProfile";

// import navbar icon
import {
  TemplateInactive,
  ProfileActive,
  MyLinkInactive,
} from "../components/IconGroup";

export default () => {
  return (
    <Container fluid>
      <Row>
        <Navbar
          templateItem={<TemplateInactive />}
          profileItem={<ProfileActive />}
          myLinkItem={<MyLinkInactive />}
        />
        <Col md={9} className="p-0">
          <div className="bg-white py-3 mb-4">
            <h4 className="py-1 ms-4 f-bold">My Account</h4>
          </div>
          <div className="bg-gray vh-90 pt-5 px-3">
            <div className="w-100 d-flex align-items-center mb-4">
              <div className="f-bold h4 m-0 ms-3">My Information</div>
            </div>
            <div className="">
              <FormProfile />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
