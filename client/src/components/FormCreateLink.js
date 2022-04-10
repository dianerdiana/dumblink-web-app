import React, { useEffect, useState } from "react";

import { Form, Image, Button } from "react-bootstrap";
import InputGroupLink from "./InputGroupLink";

export default () => {
  const [preview, setPreview] = useState(null);

  const [inputLink, setInputLink] = useState([]);
  const [childData, setChildData] = useState([]);
  const [links, setLinks] = useState([]);
  const [userLink, setUserLink] = useState({
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

  const handleLink = (e) => {
    setLinks(
      links.concat({
        ...links,
        [e.target.name]:
          e.target.type === "file" ? e.target.files : e.target.value,
      })
    );
  };

  useEffect(() => {}, []);

  return (
    <Form className="h-100 w-60 bg-white p-3 form-create-link rounded-8">
      <Form.Group className="d-flex align-items-center mb-5">
        {preview === null ? (
          <Image src="/assets/images/chess-board.png" />
        ) : (
          <Image />
        )}
        <Form.Control id="upload-image" name="image" type="file" hidden />
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
          link={`link` + inputLink.length + 1}
          name="url"
          handleLink={setChildData}
        />
      </div>
      {inputLink && inputLink}
      <Form.Group className="w-100 mt-4">
        <Button onClick={addLink} className="bg-dumblink w-100 rounded-8">
          Add New Link
        </Button>
      </Form.Group>
    </Form>
  );
};
