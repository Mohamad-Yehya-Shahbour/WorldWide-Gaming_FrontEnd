import React from 'react'
import {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from 'react-grid-system';
import Button from '@mui/material/Button';
import api from '../../services/api';


function CreateEvent() {
    const [show, setShow] = useState(false);

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[lat, setLat] = useState();
    const[long, setLong] = useState();
    const[file, setFile] = useState();

    const userId = localStorage.getItem("user_id");
    const imageUrl = "url";

    const data = new FormData();
    data.append("userId", userId);
    data.append("imageUrl", imageUrl);
    data.append("title", title);
    data.append("description",description );
    data.append("lat",lat );
    data.append("long",long );
    data.append("formFile",file );

    const handleClose = () =>{
         api
         .createEvent(data)
         .then((response)=>{
             console.log(response.status);
         })
         .catch((error)=>{console.log(error.response)})
         setShow(false)} 

    const handleShow = () =>setShow(true);

    const handleClose1 = () =>setShow(false);


    return (
        <div>
            <Container className="">
                <Button id="button-create-event" onClick={handleShow}>create Event</Button>
                <Modal className="d-flex align-items-center justify-content-center" show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Create Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col sm={12}>
                                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control mb-3" id="exampleInputTitle" aria-describedby="Title" placeholder="Title..."/>
                                </Col>
                                <Col sm={12}>
                                    <input onChange={(e) => { setDescription(e.target.value) }} type="text" className="form-control mb-3" id="exampleInputDescription" aria-describedby="Description" placeholder="Description..."/>
                                </Col>
                                <Col sm={6}>
                                    <input onChange={(e) => { setLat(e.target.value) }} type="text" className="form-control mb-3" id="exampleInputLatitude" aria-describedby="Latitude" placeholder="Latitude..."/>
                                </Col>
                                <Col sm={6}>
                                    <input onChange={(e) => { setLong(e.target.value) }} type="text" className="form-control mb-3" id="exampleInputLongitude" aria-Longitude="emailHelp" placeholder="Longitude..."/>
                                </Col>
                                <Col sm={12}>
                                    <Button 
                                    id="create-event-button"
                                    color="info"
                                    variant="contained"
                                    component="label"
                                    >
                                    Upload Photo
                                    <input
                                        onChange={(e) => { setFile(e.target.files[0]) }}
                                        type="file"
                                        hidden
                                    />
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Upload Event
                    </Button>
                </Modal.Footer>
                </Modal>
          </Container>
        </div>
    )
}

export default CreateEvent
