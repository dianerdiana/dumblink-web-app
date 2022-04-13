import { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import ModalDelete from "./ModalDelete";

import { API } from "../config/api";

export default ({ title, link, views, image, idLink }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      {" "}
      <Col md={1}>
        <Image src={image} className="img-preview" />
      </Col>
      <Col
        as={Link}
        to={"/" + link}
        className="ms-5 d-flex flex-column justify-content-center"
      >
        <div className="fs-4 f-bold text-dark">{title}</div>
        <div className="f-light text-secondary">
          {"http://localhost:3000/" + link}
        </div>
      </Col>
      <Col md={1} className="ms-5 d-flex flex-column justify-content-center">
        <div className="fs-4 f-bold">{views}</div>
        <div className="f-light text-secondary">visits</div>
      </Col>
      <Col md={3} className="ms-5 d-flex align-items-center">
        <Link to={"/" + link}>
          <Image src="/assets/icons/view.png" className="utility-icon me-3" />
        </Link>
        <Link to="/">
          <Image src="/assets/icons/edit.png" className="utility-icon me-3" />
        </Link>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-transparent ol-none p-0"
        >
          <Image src="/assets/icons/trash.png" className="utility-icon me-3" />
        </Button>
      </Col>
      <ModalDelete
        show={showModal}
        onHide={() => setShowModal(false)}
        id_link={idLink}
      />
    </>
  );
};
