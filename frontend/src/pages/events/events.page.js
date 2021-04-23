import React, { useState, useMemo } from "react";
import { Button, Form, FormGroup, Input, Col, Label, Alert } from "reactstrap";
import CameraIcon from "../../assets/camera.png";
import api from "../../services/api";
import './events.styles.scss';

const Events = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const preview = useMemo((() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }), [thumbnail])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = localStorage.getItem("user");

    const eventData = new FormData();

    eventData.append("thumbnail", thumbnail);
    eventData.append("sport", sport);
    eventData.append("title", title);
    eventData.append("price", price);
    eventData.append("description", description);
    eventData.append("date", date);

    try {
      if (title !== "" &&
        description !== "" &&
        price !== "" &&
        sport !== "" &&
        date !== "" &&
        thumbnail !== null
      ) {
        const response = await api.post("/events/new", eventData, { headers: { user_id } });
        console.log(response.data);
      } else {
        setErrorMessage(true);
        setTimeout(() => setErrorMessage(false), 3000);
        console.log("Missing required data")
      }
    } catch (error) {
      console.log(error)
    }



    return "";
  };

  return (
    <div>
      <h3 className="event-page-header">Create your Event</h3>
      <Form onSubmit={handleSubmit} className="event-form">

        <FormGroup row>
          <Col className="mx-auto">
            <Label>Upload image:</Label>
            <Label id="thumbnail" className={thumbnail ? 'has-thumbnail' : null} style={{ backgroundImage: `url(${preview})` }}>
              <Input type="file" name="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} />
              <img src={CameraIcon} style={{ maxWidth: "50px" }} alt="camera icon" />
            </Label>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="mx-auto">
            <Input type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="mx-auto">
            <Input type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="mx-auto">
            <Input type="text" name="price" id="price" placeholder="Event Price $0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="mx-auto">
            <Input type="text" name="sport" id="sport" placeholder="Sport" value={sport} onChange={(e) => setSport(e.target.value)} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="mx-auto">
            <Input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Col>
        </FormGroup>

        <div className="col text-center">
          <Button type="submit" className="btn-sm" color="dark" outline>Create Event</Button>
        </div>
        {errorMessage ? <Alert color="danger" className="text-center mt-3">Missing required information</Alert> : null}
      </Form>
    </div>
  );
};

export default Events;
