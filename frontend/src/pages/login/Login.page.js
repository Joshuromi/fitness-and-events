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

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post("/login", { email, password });
    const userId = response.data._id || false;

    if (userId) {
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="mx-auto col-md-6 mt-4 ">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://res.cloudinary.com/ehizuelen/image/upload/v1613573203/sprint-image_kly9gp.jpg"
          alt="sprinters"
        />
        <CardBody>
          <CardTitle className="text-center mb-4" tag="h6">
            Login to your account.
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Col className="mx-auto" sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
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
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </FormGroup>
            <div className="col text-center">
              <Button className="btn-sm" color="dark" outline>
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
