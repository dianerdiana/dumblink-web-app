import React, { useState, useEffect, useContext } from "react";
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

import { API } from "../config/api";

import { UserContext } from "../context/userContext";

export default () => {
  const [state, dispatch] = useContext(UserContext);
  const [userLink, setUserLink] = useState();

  console.log(state);

  const getUserLinks = async (id) => {
    const response = await API.get("/user-links/" + id);

    setUserLink(response.data.data.links);
  };

  useEffect(() => {
    getUserLinks(state.user.id);
  }, [state.user]);

  // useEffect(() => {
  //   getUserLinks();
  // }, []);
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
            <FormSearch linksTotal={userLink?.length} />
            {userLink?.map((data) => {
              return (
                <Row className="px-3 mb-4" key={data.id}>
                  <CardLink
                    image={"http://localhost:5000/uploads/" + data.image}
                    link={data.unique_link}
                    views={data.view_count}
                    title={data.title}
                    idLink={data.id}
                  />
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
