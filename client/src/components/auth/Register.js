import React, { useState } from "react";

import { Modal, Button, Form, Alert } from "react-bootstrap";

export default (props) => {
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const { email, password, fullName } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Modal
      {...props}
      contentClassName="modal-content-form"
      dialogClassName="modal-dialog-form"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="px-4 py-5">
        <Form className="px-1">
          <h1 className="fw-bold mb-4">Sign In</h1>
          {message && message}
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray"
          />
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray"
          />
          <Form.Control
            name="fullName"
            type="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray"
          />
          <Button
            type="submit"
            className="w-100 bg-red fw-bold py-2 mt-2 mb-3 bg-dumblink ol-none rounded-8"
          >
            Sign In
          </Button>

          <p className="mb-0 ms-5 me-5">
            Already have an account ? Klik{" "}
            <span
              onClick={props.modal}
              className="fw-bold f-bold"
              style={{ cursor: "pointer" }}
            >
              Here
            </span>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
