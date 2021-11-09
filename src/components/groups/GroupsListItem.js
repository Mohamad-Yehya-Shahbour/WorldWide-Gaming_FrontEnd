import React from 'react'
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Row, Col } from 'react-grid-system';
import api from '../../services/api';
import { useState } from 'react';



function GroupsListItem(props) {
    const [disable, setDisable] = useState(false);
    const userId = localStorage.getItem("user_id")
    const [groupId, setGrouId] = useState(0);
    
    if(groupId != 0) {
      
        const data = JSON.stringify({
            userId: userId,
            groupId : groupId
        })
        api
        .joinGroup(data)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{console.log(error.response)})
        setGrouId(0);
        setDisable(true);
    }
    return (
        <div>
            <Row className="mb-3 mt-3">
                <Col sm={8}>
                    <ListItem button  onClick={(e)=>{e.preventDefault();
                                                        localStorage.setItem("group_id", props.group.id);
                                                        localStorage.setItem("group_name", props.group.name);
                                                        props.history.push("/group-feed") }} >
                        <ListItemAvatar >
                        <Avatar alt="Remy Sharp" src={`http://localhost:31058${props.group.game}`} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={props.group.name}
                        secondary={<React.Fragment>{props.group.description}</React.Fragment>}/>
                    </ListItem> 
                </Col>
                <Col sm={4} className="d-flex align-items-center justify-content-center ">
                    <Button disabled={disable} onClick={() => {setGrouId(props.group.id)}} size="small" fullWidth="true" className="btn btn-outline-secondary group-button">join</Button>
                </Col>
             </Row>
             <Divider variant="inset" component="li" />
        </div>
    )
}

export default GroupsListItem
