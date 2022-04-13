import React, { useEffect, useState } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

export default ({ image, title, description, links }) => {
  useEffect(() => {}, []);
  return (
    <Row className="justify-content-center align-items-center mt-5">
      <Col md={6}>
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
                className="bg-dark w-90 px-2 align-items-center mb-3"
              >
                <Col md={1} className="d-flex justify-content-center py-2 ps-3">
                  <Image src="/assets/icons/fb.png" className="icon-url" />
                </Col>

                <Col md={10} className="text-center text-light py-2">
                  {data.title}
                </Col>
              </Row>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};
