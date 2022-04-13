import { Row, Col, Button, Container, Modal } from "react-bootstrap";

import { API } from "../config/api";

export default (props) => {
  const handleDelete = async () => {
    const response = await API.delete("/delete-user-link/" + props.id_link);
    if (response.status == 200) {
      props.onHide();
    }
  };
  return (
    <Modal
      {...props}
      contentClassName="pop-up-content"
      dialogClassName="modal-dialog-form"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="px-4 py-4">
        <Container>
          <Row className="mb-4">
            <Col style={{ color: "#469F74" }}>
              Are you sure want to remove this link?
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md={4} className="me-2">
              <Button
                onClick={handleDelete}
                className="rounded-8 px-5 py-1"
                variant="danger"
              >
                Yes
              </Button>
            </Col>
            <Col onClick={props.onHide} md={4}>
              <Button className="rounded-8 px-5 py-1" variant="secondary">
                No
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
