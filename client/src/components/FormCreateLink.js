import React, { useState } from "react";

import { Form, Image, Button } from "react-bootstrap";
import InputGroupLink from "./InputGroupLink";

export default () => {
  const [preview, setPreview] = useState(null);

  return (
    <Form className="h-100 w-60 bg-white p-3 form-create-link rounded-8">
      <Form.Group className="d-flex align-items-center mb-5">
        {preview === null ? (
          <Image src="/assets/images/chess-board.png" />
        ) : (
          <Image />
        )}
        <Form.Control id="upload-image" type="file" hidden />
        <Form.Label
          htmlFor="upload-image"
          className="bg-dumblink px-3 py-1 mb-0 ms-5 rounded-8 text-white"
        >
          Upload
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-5 w-100">
        <Form.Label
          htmlFor="input-title"
          className="f-light fs-6 text-secondary"
        >
          Title
        </Form.Label>
        <Form.Control
          type="text"
          id="input-title"
          placeholder="e.x Your Title"
          className="form-input text-secondary fs-4"
        />
      </Form.Group>
      <Form.Group className="mb-5 w-100">
        <Form.Label
          htmlFor="input-desc"
          className="f-light fs-6 text-secondary"
        >
          Description
        </Form.Label>
        <Form.Control
          type="text"
          id="input-desc"
          placeholder="e.x Your Description"
          className="form-input text-secondary fs-4"
        />
      </Form.Group>
      <InputGroupLink />
      <InputGroupLink />
      <Form.Group className="w-100 mt-4">
        <Button className="bg-dumblink w-100 rounded-8">Add New Link</Button>
      </Form.Group>
    </Form>
  );
};
