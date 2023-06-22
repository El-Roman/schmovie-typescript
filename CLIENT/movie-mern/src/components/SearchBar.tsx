import "../index.css";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import React from "react";

export default function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Row className="g-2">
        <Col md>
          <FloatingLabel
            controlId="floatingInputGrid"
            label="Search for a movie"
            className="position-fixed"
            style={{ width: "17rem" }}
          >
            <Form.Control
              type="text"
              value={query}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
}