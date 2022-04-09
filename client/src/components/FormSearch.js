import { Form, InputGroup, Image, Button } from "react-bootstrap";

export default ({ linksTotal }) => {
  return (
    <Form>
      <Form.Group className="w-100 d-flex align-items-center mb-4">
        <Form.Label className="f-bold h4 m-0 ms-3">All Links</Form.Label>
        <Form.Floating className="ms-3 px-2 py-0 bg-dumblink text-white rounded-circle text-center">
          {linksTotal}
        </Form.Floating>
        <InputGroup className="ms-5 w-50">
          <InputGroup.Text className="form-input bg-transparent">
            <Image src="/assets/icons/loupe.png" />
          </InputGroup.Text>
          <Form.Control
            className="form-input bg-transparent"
            placeholder="Find your link"
          />
        </InputGroup>
        <Button className="bg-dumblink px-4 py-1 ms-5 rounded-8">Search</Button>
      </Form.Group>
    </Form>
  );
};
