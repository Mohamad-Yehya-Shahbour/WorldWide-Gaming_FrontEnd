import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Row, Col } from 'react-grid-system';
import { useState} from 'react'


function UserProfileGroupsItem() {
   
    return (
        <div>
            <Row className="mb-3">
                    <Col sm={12} >
                      
                            <ListItem  button  onClick={(e)=>{e.preventDefault(); console.log("group")}} >
                                <ListItemAvatar >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary= {"group.name"}
                                secondary={<React.Fragment>
                                    {"group.description"}
                                    </React.Fragment>}/>    
                            </ListItem>
                       
                        
                    </Col>  
             </Row>
             <Divider/>
        </div>
    )
}

export default UserProfileGroupsItem
