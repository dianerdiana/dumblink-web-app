import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

// import navbar icon
import {
  MyLinkInactive,
  ProfileInactive,
  TemplateActive,
} from "../components/IconGroup";
import FormCreateLink from "../components/FormCreateLink";

import { UserContext } from "../context/userContext";

export default () => {
  const [state, dispatch] = useContext(UserContext);
  const params = useParams();
  const [templateImage, setTemplateImage] = useState();

  const choosedTemplate = params.template;

  useEffect(() => {
    if (choosedTemplate == "milk") {
      setTemplateImage("/assets/images/phone-1.png");
    } else if (choosedTemplate == "aquos") {
      setTemplateImage("/assets/images/phone-2.png");
    } else if (choosedTemplate == "sunset") {
      setTemplateImage("/assets/images/phone-3.png");
    } else if (choosedTemplate == "self") {
      setTemplateImage("/assets/images/phone-4.png");
    }
  }, []);

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
            <FormCreateLink
              templateImage={templateImage}
              template={choosedTemplate}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
