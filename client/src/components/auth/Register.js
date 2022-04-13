import React, { useState } from "react";

import { Modal, Button, Form, Alert } from "react-bootstrap";

//import api
import { API } from "../../config/api";

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      // Content-type: application/json
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user to database here ...
      const response = await API.post("/register", body, config);

      // Notification
      if (response.data.status == "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success, please login.
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed Oi
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
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
        <Form onSubmit={handleSubmit} className="px-1">
          <h1 className="fw-bold mb-4 f-bold">Register</h1>
          {message && message}
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray form-auth"
          />
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray form-auth"
          />
          <Form.Control
            name="fullName"
            type="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={handleChange}
            className="mb-4 py-2 text-secondary bg-gray form-auth"
          />
          <Button
            type="submit"
            className="w-100 fw-bold py-2 mt-2 mb-3 bg-dumblink ol-none rounded-8"
          >
            Register
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
