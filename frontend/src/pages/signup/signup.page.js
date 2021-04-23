import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderText } from "../../components/header-text/headerText.component";
import { Button, Form, FormGroup, Input, Col, Card, CardBody, CardTitle } from "reactstrap";
import api from "../../services/api";
import "./signup.styles.scss";

const SignUp = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post("/user/register", {
      email,
      password,
      firstName,
      lastName,
    });
    const userId = response.data._id || false;

    if (userId) {
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="signin">
      <Card className="mx-auto col-md-8 mt-4">
        <CardBody>
          <HeaderText />
          <CardTitle className="text-center mb-4" tag="h6">Sign up for a new account.</CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Col className="mx-auto" sm={10}>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="mx-auto" sm={10}>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
            </FormGroup>
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
                Sign Up
              </Button>
            </div>
          </Form>
        </CardBody>
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Click here to Login.</Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;
