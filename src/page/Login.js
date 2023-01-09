import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <Row flex-direction="center">
          <Col sm={12}>
            <Form>
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
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
