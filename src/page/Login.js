import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/");
            setAuthenticate(true);
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="ID를 입력하세요." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password를 입력하세요."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
