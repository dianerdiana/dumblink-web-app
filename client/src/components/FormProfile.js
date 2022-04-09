import React, { useState } from "react";

import { Form, Button, InputGroup } from "react-bootstrap";

export default () => {
  return (
    <Form>
      <InputGroup className="h-100 w-100 bg-white p-4 form-create-link rounded-8">
        <Form.Group className="w-100 mb-5">
          <Form.Label htmlFor="input-name" className="text-secondary">
            Name
          </Form.Label>
          <Form.Control
            type="text"
            id="input-name"
            className="form-input text-dark fs-5 ps-0"
            placeholder="Full Name"
          />
        </Form.Group>
        <Form.Group className="w-100 mb-3">
          <Form.Label htmlFor="input-email" className="text-secondary">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            id="input-email"
            className="form-input text-dark fs-5 ps-0"
            placeholder="address@email.com"
          />
        </Form.Group>
      </InputGroup>
      <Form.Group className="d-flex justify-content-end mt-5">
        <Button className="bg-dumblink text-white px-4 py-1 rounded-8">
          Save Account
        </Button>
        <Button className="bg-red me-3 ms-4 text-white px-3 py-1 rounded-8">
          Delete Account
        </Button>
      </Form.Group>
    </Form>
  );
};
