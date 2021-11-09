import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import {Paper } from "@material-ui/core";
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react'
import api from '../../../services/api';


function CommentInput(props) {
    const [body, setBody] = useState("");
    const postId=props.postId;
    const UserWhoCommentsId = localStorage.getItem("user_id");
    const data = {
        postId : postId,
        UserWhoCommentsId: UserWhoCommentsId,
        body: body,
    }
    const handler = (e) =>{
        e.preventDefault();
        api
        .addPostComment(data)
        .then((response)=>{
            console.log(response.status);
        })
        .catch((error)=>{console.log(error.response)})

    }


    return (
        <div>
            <Paper style={{ padding: "10px 10px", marginTop: 5,}}>
                <Container>
                    <Row>
                        <Col sm={10} className="d-flex align-items-center justify-content-center">
                        <input onChange={(e) => { setBody(e.target.value) }} style ={{width:""}}type="text" className="form-control" placeholder="write your comment.." aria-label="" />
                        </Col>
                        <Col sm={1} className="d-flex align-items-center justify-content-center">
                        <Button onClick={(e)=>{handler(e)}} size="small" className=""><ChatOutlined id="add-comment"/></Button>
                        </Col>
                    </Row>
                </Container>
            </Paper>
        </div>
    )
}

export default CommentInput
