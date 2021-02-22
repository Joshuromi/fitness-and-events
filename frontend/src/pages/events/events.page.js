import React, { useState } from "react";
import api from "../../services/api";
import { Button, Form, FormGroup, Input, Col } from "reactstrap";
import CameraIcon from "../../assets/camera.png";

const Events = () => {
  const userId = localStorage.getItem("user");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDsfault();

    return "";
  };

  return (
    <div>
      <h3>Create your Event</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="file"
              name="thumbnail"
              id="thumbnail"
              onChange={(e) => setThumbnail(e.target.value)}
            />
            <img
              src={CameraIcon}
              style={{ maxWidth: "50px" }}
              alt="camera icon"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="text"
              name="price"
              id="price"
              placeholder="Event Price $0.00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="text"
              name="sport"
              id="sport"
              placeholder="Sport"
              onChange={(e) => setSport(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="mx-auto" sm={8}>
            <Input
              type="date"
              name="date"
              id="date"
              placeholder="Sport"
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </FormGroup>
        <div className="col text-center">
          <Button className="btn-sm" color="dark" outline>
            Create Event
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Events;
