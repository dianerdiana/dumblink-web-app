import React, { useState } from "react";

import { Form, Image, InputGroup } from "react-bootstrap";

export default ({ titleName, link, name, handleLink }) => {
  const [preview, setPreview] = useState(null);
  const [links, setLinks] = useState([]);

  const { title, url } = links;

  const handleChange = async (e) => {
    setLinks({
      ...links,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file" && e.target.name === "image") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }

    handleLink(links);
  };

  return (
    <InputGroup className="bg-gray w-100 p-3 d-flex rounded-8 mb-4">
      <div>
        {preview === null ? (
          <Image src="/assets/images/chess-board.png" />
        ) : (
          <Image />
        )}
      </div>
      <Form.Group className="ps-3 w-80 row flex-column">
        <div className="mb-4 col">
          <Form.Label
            htmlFor={titleName}
            className="d-block fs-6 text-secondary"
          >
            Title Link
          </Form.Label>
          <Form.Control
            id={titleName}
            type="text"
            name={titleName}
            onChange={handleChange}
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </div>
        <div className="col">
          <Form.Label htmlFor={link} className="d-block fs-6 text-secondary">
            Link
          </Form.Label>
          <Form.Control
            id={link}
            type="text"
            name={name}
            onChange={handleChange}
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </div>
      </Form.Group>
    </InputGroup>
  );
};
