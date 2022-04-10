import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

// import navbar icon
import {
  MyLinkInactive,
  ProfileInactive,
  TemplateActive,
} from "../components/IconGroup";
import FormCreateLink from "../components/FormCreateLink";

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
          <div className="bg-gray vh-90 py-5 ps-3">
            <div className="w-100 d-flex align-items-center mb-4">
              <div className="f-bold h4 m-0 ms-3">Create Link</div>
              <div className="ms-auto me-5">
                <Button className="btn text-white f-bold bg-dumblink fw-bold px-2 ml-auto rounded-8">
                  Publish Link
                </Button>
              </div>
            </div>
            <div>
              <FormCreateLink />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
