import React, { useState } from "react";
import api from "../../services/api";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="mx-auto col-md-6">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://res.cloudinary.com/ehizuelen/image/upload/v1613573203/sprint-image_kly9gp.jpg"
          alt="sprinters"
        />
        <CardBody>
          <CardTitle className="text-center mb-4" tag="h5">
            Login
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Col className="mx-auto" sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="mx-auto" sm={10}>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </FormGroup>
            <div className="col text-center">
              <Button color="dark" outline>
                Submit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
