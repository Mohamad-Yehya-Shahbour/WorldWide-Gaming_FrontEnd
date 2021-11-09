import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { Paper } from "@material-ui/core";
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import Button from '@mui/material/Button';
import { handleBreakpoints } from '@mui/system';
import { useState, useEffect} from 'react'
import api from '../../services/api';



function GroupAddPost(props) {
    const[value, setValue] = useState('');
    const groupId = props.groupId;
    const userId = localStorage.getItem('user_id');
    const handle = (e) => {
        e.preventDefault();
        const groupPost = JSON.stringify({
            groupId: groupId,
            userId: userId,
            body: value,
        });
        api
        .addPostOnGroup(groupPost)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{console.log(error.response)})
        console.log(value);
    }
    return (
        <div>
           
                <Container style={{minWidth: "80%",backgroundColor:"white", boxShadow:"initial" }} className=" rounded p-3 shadow-box-example z-depth-1">
                    <Row>
                        <Col sm={10} className="d-flex align-items-center justify-content-center">
                        <input onInput={(e)=>{e.preventDefault();setValue(e.target.value)}} id="group-input" style ={{width:"100%"}}type="text" className="form-control" placeholder="Write your thoughts here.." aria-label="" />
                        </Col>
                        <Col sm={1} className="d-flex align-items-center justify-content-center">
                        <Button onClick={(e)=>{handle(e)}} size="small" className=""><ChatOutlined id="add-group-post" /></Button>
                        </Col>
                    </Row>
                </Container>
            
        </div>
    )
}

export default GroupAddPost
