import React, { useEffect, useState } from "react";

import { Col, Form, Image, InputGroup } from "react-bootstrap";

export default ({ titleName, link, name, handleLink }) => {
  const [preview, setPreview] = useState(null);
  const [links, setLinks] = useState({
    title: "",
    url: "",
    image: "",
  });

  console.log(preview, links);

  const handleChange = async (e) => {
    setLinks({
      ...links,
      [e.target.name]: e.target.value,
    });

    if (links?.url?.includes("facebook.com")) {
      setLinks({
        ...links,
        image: "/assets/icons/fb.png",
      });
      setPreview("/assets/icons/fb.png");
    } else if (links?.url?.includes("twitter.com")) {
      setLinks({
        ...links,
        image: "/assets/icons/twitter.png",
      });
      setPreview("/assets/icons/twitter.png");
    } else if (links?.url?.includes("instagram.com")) {
      setLinks({
        ...links,
        image: "/assets/icons/instagram.png",
      });
      setPreview("/assets/icons/instagram.png");
    } else if (links?.url?.includes("whatsapp.com")) {
      setLinks({
        ...links,
        image: "/assets/icons/whatsapp.png",
      });
      setPreview("/assets/icons/whatsapp.png");
    } else if (links?.url?.includes("tiktok.com")) {
      setLinks({
        ...links,
        image: "/assets/icons/tiktok-square.png",
      });
      setPreview("/assets/icons/tiktok-square.png");
    }

    // Create image url for preview
    // if (e.target.type === "file" && e.target.name === "image") {
    //   let url = URL.createObjectURL(e.target.files[0]);
    //   setPreview(url);
    // }
  };

  useEffect(() => {
    handleLink(links);
  }, [links]);

  return (
    <InputGroup className="bg-gray w-100 p-3 d-flex rounded-8 mb-4">
      <div>
        {preview === null ? (
          <Image src="/assets/images/chess-board.png" />
        ) : (
          <Image src={preview} />
        )}
      </div>
      <Form.Group className="ms-auto w-80 row flex-column">
        <Col className="mb-4 w-100">
          <Form.Label
            htmlFor={titleName}
            className="d-block fs-6 text-secondary"
          >
            Title Link
          </Form.Label>
          <Form.Control
            type="text"
            id={titleName}
            name={titleName}
            onChange={handleChange}
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </Col>
        <Col>
          <Form.Label htmlFor={link} className="d-block fs-6 text-secondary">
            Link
          </Form.Label>
          <Form.Control
            type="text"
            id={link}
            name={name}
            onChange={handleChange}
            placeholder="e.x Your Title Link"
            className="bg-transparent form-input fs-5 text-dark"
          />
        </Col>
      </Form.Group>
    </InputGroup>
  );
};
