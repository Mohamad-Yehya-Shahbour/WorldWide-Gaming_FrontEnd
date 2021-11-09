import * as React from 'react';
import List from '@mui/material/List';
import { Container, Row, Col } from 'react-grid-system';
import GroupsListItem from './GroupsListItem';
import { useState, useEffect} from 'react'
import api from '../../services/api';



export default function GroupsItem(props) {
  const [groups, setgroups] = useState([]);

    useEffect(() => {
        api
        .getGroups()
        .then((response)=>{
            console.log(response.data);
            setgroups(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    }, []);

  return (
      <Container>
        <Row>
          <Col sm={12} className="d-flex justify-content-center" >
            <List sx={{ width: '100%', maxWidth: 700 }}>
              {groups.map(group => (
                <GroupsListItem key={`groupslist${group.id}`} group={group} history={props.history}/>
              ))}
            </List>
          </Col>
        </Row>
    </Container>
  );
}
