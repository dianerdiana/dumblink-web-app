import React, { useEffect, useState } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

export default ({ image, title, description, links }) => {
  useEffect(() => {}, []);
  return (
    <Row className="justify-content-center vh-90">
      <Col
        md={6}
        style={{ background: "#DBE3DF" }}
        className="justify-content-center vh-90 w-50 rounded-3"
      >
        <div className="text-center mb-3">
          <Image src={image} className="img-brand" />
        </div>
        <div className="text-center mb-2">
          <h3 className="f-bold">{title}</h3>
        </div>
        <div>
          <p className="text-center fs-5 text-secondary">{description}</p>
        </div>
        {links?.map((data) => {
          return (
            <Row className="justify-content-center" key={data.id}>
              <Row
                as="a"
                target="_blank"
                href={"https://" + data?.url}
                style={{ border: "2px solid #B3D2DC" }}
                className="bg-white w-90 px-2 align-items-center mb-3 rounded-50"
              >
                <Col className="text-center text-dark py-2">{data.title}</Col>
              </Row>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};
