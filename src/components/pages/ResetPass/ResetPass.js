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
  const { AllContexts } = UseAuth();
  const { getEmail, resetPassword, error } = AllContexts;

  return (
    <div>
      <Container style={{ width: "400px", marginTop: "100px" }}>
        <h5>Enter Your Email</h5>
        <p className="text-danger text-center">{error}</p>
        <Form onSubmit={resetPassword}>
          <InputGroup className="mb-3">
            <FormControl
              className="reset-pass-input"
              required
              onBlur={getEmail}
              placeholder="Your Email"
              type="email"
              aria-describedby="basic-addon2"
            />
            <Button
              className="button reset-pass-btn"
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
