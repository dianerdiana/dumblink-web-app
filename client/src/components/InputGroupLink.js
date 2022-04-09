import React, { useState } from "react";

import { Form, Image, InputGroup } from "react-bootstrap";

export default () => {
  const [preview, setPreview] = useState(null);

  return (
    <InputGroup className="bg-gray p-3 d-flex rounded-8 mb-4">
      <div>
        {preview === null ? (
          <Image src="/assets/images/chess-board.png" />
        ) : (
          <Image />
        )}
      </div>
      <Form.Group className="ps-3 w-80">
        <div className="mb-4">
          <Form.Label
            htmlFor="title-link"
            className="d-block fs-6 text-secondary"
          >
            Title Link
          </Form.Label>
          <Form.Control
            id="title-link"
            type="text"
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </div>
        <div>
          <Form.Label htmlFor="link" className="d-block fs-6 text-secondary">
            Link
          </Form.Label>
          <Form.Control
            id="link"
            type="text"
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </div>
      </Form.Group>
    </InputGroup>
  );
};
