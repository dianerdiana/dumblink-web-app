import React, { useEffect, useState } from "react";

import Milk from "../components/templates/Milk";
import Aquos from "../components/templates/Aquos";

import { Container } from "react-bootstrap";
import { API } from "../config/api";
import { useParams } from "react-router-dom";

import countapi from "countapi-js";

export default () => {
  const params = useParams();
  const uniqueLink = params.uniqueLink;

  const [userLink, setUserLink] = useState(null);
  const [views, setViews] = useState();

  const getLinks = async () => {
    const response = await API.get("/user-link/" + uniqueLink);

    setUserLink(response.data.data);
  };

  const updateView = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = JSON.stringify(views?.view);

    const response = await API.patch(
      "/update-view/" + userLink?.id,
      body,
      config
    );

    getLinks();
  };

  useEffect(() => {
    updateView();
  }, [views]);

  useEffect(() => {
    getLinks();
    countapi.hit("dumblink", uniqueLink).then((result) => {
      setViews({ view: { view_count: result.value } });
    });
  }, []);
  return (
    <>
      {userLink?.template == "milk" ? (
        <Container fluid className="vh-100 py-5">
          <Milk
            image={
              userLink == null
                ? "/assets/images/waysfood.png"
                : "http://localhost:5000/uploads/" + userLink?.image
            }
            title={userLink?.title}
            description={userLink?.description}
            links={userLink?.links}
          />
        </Container>
      ) : userLink?.template == "aquos" ? (
        <Container
          fluid
          className="vh-100 py-5"
          style={{ background: "#B3D2DC" }}
        >
          <Aquos
            image={
              userLink == null
                ? "/assets/images/waysfood.png"
                : "http://localhost:5000/uploads/" + userLink?.image
            }
            title={userLink?.title}
            description={userLink?.description}
            links={userLink?.links}
          />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
