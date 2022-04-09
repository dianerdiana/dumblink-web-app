import { Row, Col, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

export default () => {
  return (
    <Row className="px-3 mb-4">
      <Col md={1}>
        <Image src="/assets/images/waysfood.png" />
      </Col>
      <Col className="ms-5 d-flex flex-column justify-content-center">
        <div className="fs-4 f-bold">Waysfood</div>
        <div className="f-light text-secondary">localhost:3000/waysfood</div>
      </Col>
      <Col md={1} className="ms-5 d-flex flex-column justify-content-center">
        <div className="fs-4 f-bold">10</div>
        <div className="f-light text-secondary">visits</div>
      </Col>
      <Col md={3} className="ms-5 d-flex align-items-center">
        <Link to="/">
          <Image src="/assets/icons/view.png" className="utility-icon me-3" />
        </Link>
        <Link to="/">
          <Image src="/assets/icons/edit.png" className="utility-icon me-3" />
        </Link>
        <Link to="/">
          <Image src="/assets/icons/trash.png" className="utility-icon me-3" />
        </Link>
      </Col>
    </Row>
  );
};
