import React from 'react'

import FormLogin from "./FormLogin";
import { Row, Col } from "react-bootstrap";

const LoginPage = () => (
  <section>
    <Row className="justify-content-md-center">
      <Col xs={3} >
        <h1>Login Gateway</h1>
        <FormLogin/>
      </Col>
    </Row>
  </section>
);

export default LoginPage;
