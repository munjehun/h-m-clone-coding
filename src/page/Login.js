import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    if (id.length < 1) {
      alert("아이디를 입력하세요.");
      return;
    }
    if (password.length < 1) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    event.preventDefault();
    navigate("/");
    dispatch(authenticateAction.login(id, password));
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="id"
              placeholder="ID를 입력하세요."
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password를 입력하세요."
              onChange={(e) => setPassword(e.target.value)}
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
