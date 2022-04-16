import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleReset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div className="container mt-5">
      <div className="mx-auto w-50 border shadow p-4">
        <h2 className="text-primary text-center mb-4">Reset Your Password</h2>
        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Reset
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reset;
