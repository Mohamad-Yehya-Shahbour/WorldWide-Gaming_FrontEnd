import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-grid-system';
import UserProfileGroupsItem from './UserProfileGroupsItem';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import api from '../../../services/api';
import { useState, useEffect} from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';



export default function UserProfileGroups(props) {
  const [value, setValue] = React.useState('1');
  
  const Handle = (e, newValue) => {
      e.preventDefault();
      setValue(newValue);
    
    };
  

  
  return (
    <div>
      <Container className="mt-2">
        <Row >
          <Col sm={6} >
            <Row>
              <Col sm={12} className="d-flex justify-content-center">
              <h5><b>Created Groups</b></h5>
              </Col>
            </Row>
            <Row >
              <Col sm={12} >
                <List sx={{ width: '100%', maxWidth: 700 }}>
                  {props.userGroups.map(useGroup=>(
                    <>
                    <ListItem button  onClick={(e)=>{e.preventDefault(); console.log("group")}} >
                      <ListItemAvatar >
                        <Avatar alt="Remy Sharp" src={`http://localhost:31058${useGroup.game}`} />
                      </ListItemAvatar>
                      <ListItemText
                      primary= {useGroup.name}
                      secondary={<React.Fragment>
                          {useGroup.description}
                          </React.Fragment>}/>    
                    </ListItem>
                    <Divider/> 
                  </>
                  ))}
                </List>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={12} className="d-flex justify-content-center">
                <h5><b>Joined Groups</b></h5>
              </Col>
            </Row>
            <Row>
              <Col sm={12} >
              <List sx={{ width: '100%', maxWidth: 700 }}>
                  {props.groups.map(group=>(
                    <>
                    <ListItem  button  onClick={(e)=>{e.preventDefault(); console.log("group")}} >
                      <ListItemAvatar >
                      <Avatar alt="Remy Sharp" src={`http://localhost:31058${group.game}`} />
                      </ListItemAvatar>
                      <ListItemText
                      primary= {group.name}
                      secondary={<React.Fragment>
                          {group.description}
                          </React.Fragment>}/>    
                    </ListItem>
                    <Divider/> 
                  </>
                  ))}
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
