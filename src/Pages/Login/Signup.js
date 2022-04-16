import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialSignIn from "../Shared/SocialSignIn";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile] = useUpdateProfile(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <div className="container mt-5">
      <div className="mx-auto w-50 border shadow p-4">
        <h2 className="text-primary text-center mb-4">Please SignUp</h2>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={() => setChecked(!checked)}
              label="I accept your terms and condition"
              className={checked ? "" : "text-danger"}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!checked}>
            SignUp
          </Button>
        </Form>
        <p className="mt-2">
          Already have an accaount? <Link to="/login">Please Login</Link>
        </p>
        <SocialSignIn></SocialSignIn>
      </div>
    </div>
  );
};

export default Signup;
