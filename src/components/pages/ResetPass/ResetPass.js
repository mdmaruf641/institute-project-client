import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import UseAuth from "../../../hocks/UseAuth";
import "./ResetPass.css";

const ResetPass = () => {
  const { getEmail, resetPassword, error } = UseAuth();
  return (
    <div>
      <Container style={{ width: "400px" }} className="my-5">
        <h5>Enter Your Email</h5>
        <p className="text-danger text-center">{error}</p>
        <Form onSubmit={resetPassword}>
          <InputGroup className="mb-3">
            <FormControl
              onBlur={getEmail}
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              Send
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
};

export default ResetPass;
