import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    console.log(response.data);

    if (userId) {
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="mx-auto col-md-8 mt-4">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://res.cloudinary.com/ehizuelen/image/upload/v1613652735/ready-state_h5upnf.jpg"
          alt="sprinters"
        />
        <CardBody>
          <CardTitle className="text-center mb-4" tag="h6">
            Sign up for a new account.
          </CardTitle>
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
                Submit
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <p className="text-center mt-2">
        Already have an account? <Link to="/login">Click here to Login.</Link>
      </p>
    </div>
  );
};

export default SignUp;
