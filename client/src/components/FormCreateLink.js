import React, { useEffect, useState } from "react";

import { Form, Image, Button, Row, Col } from "react-bootstrap";
import InputGroupLink from "./InputGroupLink";

import { API } from "../config/api";

import { useNavigate } from "react-router-dom";

export default ({ templateImage, template }) => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [inputLink, setInputLink] = useState([]);
  const [childData, setChildData] = useState([]);
  const [links, setLinks] = useState([]);
  const [userLink, setUserLink] = useState({
    image: "",
    title: "",
    description: "",
  });

  // console.log(userLink);
  const { title, description } = userLink;

  const addLink = async () => {
    const number = inputLink.length;

    try {
      setLinks(links.concat(childData));

      setInputLink(
        inputLink.concat(
          <div className="w-100" key={number}>
            <InputGroupLink
              titleName="title"
              link={`link` + number + 1}
              name="url"
              handleLink={setChildData}
            />
          </div>
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserLink({
      ...userLink,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file" && e.target.name === "image") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      // Content-type: multipart/form-data
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      formData.set("image", userLink.image[0], userLink.image[0].name);
      formData.set("title", userLink.title);
      formData.set("description", userLink.description);
      formData.set("template", template);

      const response = await API.post("/add-user-link", formData, config);

      const resChild = links?.map((data) => {
        const body = JSON.stringify(data);
        const configLink = {
          headers: {
            "Content-type": "application/json",
          },
        };
        API.post("/add-link/" + response.data?.links?.id, body, configLink);
      });

      if (response.status == 200) {
        setUserLink({
          image: "",
          title: "",
          description: "",
        });

        setInputLink([]);

        navigate("/" + response.data.links.unique_link);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <div className="w-100 d-flex align-items-center mb-4">
          <div className="f-bold h4 m-0 ms-3">Create Link</div>
          <div className="ms-auto me-5">
            <Button
              type="submit"
              className="btn text-white f-bold bg-dumblink fw-bold px-2 ml-auto rounded-8"
            >
              Publish Link
            </Button>
          </div>
        </div>
      </Row>
      <Row className="p-3">
        <Col md={7} className="h-100 bg-white p-3 form-create-link rounded-8">
          <Form.Group className="d-flex align-items-center mb-5">
            {preview === null ? (
              <Image
                src="/assets/images/chess-board.png"
                className="img-preview"
              />
            ) : (
              <Image src={preview} className="img-preview" />
            )}
            <Form.Control
              id="upload-image"
              name="image"
              type="file"
              onChange={handleChange}
              hidden
            />
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
              name="title"
              onChange={handleChange}
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
              name="description"
              onChange={handleChange}
              placeholder="e.x Your Description"
              className="form-input text-secondary fs-4"
            />
          </Form.Group>
          <div className="w-100">
            <InputGroupLink
              titleName="title"
              name="url"
              link={`link` + inputLink.length + 1}
              handleLink={setChildData}
            />
          </div>
          {inputLink && inputLink}
          <Form.Group className="w-100 mt-4">
            <Button onClick={addLink} className="bg-dumblink w-100 rounded-8">
              Add New Link
            </Button>
          </Form.Group>
        </Col>
        <Col md={5} className="ms-auto">
          <Image src={templateImage} className="p-5" />
        </Col>
      </Row>
    </Form>
  );
};
