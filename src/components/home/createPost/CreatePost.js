import React from 'react'
import {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from 'react-grid-system';
import Button from '@mui/material/Button';
import api from '../../../services/api';


function CreatePost() {
    const [show, setShow] = useState(false);

    const handleClose1 = (e) => {e.preventDefault(); setShow(false)}
    const handleShow = () => setShow(true);

    const[description, setDescription] = useState("");
    const[file, setFile] = useState();

    const userId = localStorage.getItem("user_id");
    const numberOfLikes = 0;
    const clipUrl = "url";
    const data = new FormData();
    data.append("description", description);
    data.append("userId", userId);
    data.append("numberOfLikes", numberOfLikes);
    data.append("clipUrl", clipUrl);
    data.append("formFile", file);


    const handleClose = () => {
        api
         .addPost(data)
         .then((response)=>{
             console.log(response.status);
         })
         .catch((error)=>{console.log(error.response)});
         setShow(false);
        };

    return (
        <div>
            <Container style={{marginBottom:"25px"}}>
                <Button id="button-create" sx={{ color:"white"}} onClick={handleShow} variant="contained" className="float-right">create post</Button>
                <Modal className="d-flex align-items-center justify-content-center" show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm={12}>
                            <input onChange={(e) => { setDescription(e.target.value)}}  type="text" className="form-control mb-3" id="exampleInputtext" aria-describedby="textHelp" placeholder="Description..."/>
                            </Col>
                            <Col sm={12}>
                                <Button id="create-post-button"  color="info" variant="contained" component="label" >
                                    Upload Video
                                    <input onChange={(e) => { setFile(e.target.files[0]) }}  type="file" hidden />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(e)=>{handleClose1(e)}}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Upload Post
                    </Button>
                </Modal.Footer>
                </Modal>
          </Container>
        </div>
    )
}

export default CreatePost
