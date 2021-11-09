import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import GroupFeedPost from './GroupFeedPost';
import GroupAddPost from './GroupAddPost';
import { useState, useEffect} from 'react'
import api from '../../services/api';

function GroupFeedItem() {
    const [groupPosts, setGroupPosts] = useState([]);
    const groupName= localStorage.getItem("group_name");
    const groupId = localStorage.getItem("group_id");
    useEffect(() => {
        api
        .getGroupPosts(groupId)
        .then((response)=>{
            console.log(response.data);
            setGroupPosts(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    }, []);
    return (
        <div>
            <Container>
                <Row>
                   <Col sm={12}>
                       <b><p style={{fontSize:"1.7em"}}>{groupName} GROUP</p></b>
                    </Col> 
                </Row>
            </Container>
            <Container  className="m-5">
                <Row>
                   <Col sm={11} className="d-flex justify-content-center align-item-center">
                       <GroupAddPost groupId={groupId}/>
                    </Col> 
                </Row>
            </Container>
            {groupPosts.map(groupPost => (
                <Container style={{boxSizing:"border-box"}} className="mb-3 mt-1" >
                        <Row>
                            <Col sm={11} className="d-flex align-items-center justify-content-center mb-5">
                                <GroupFeedPost groupPost={groupPost}/>  
                            </Col>
                        </Row>
                </Container>
            ))}
            
        </div>
    )
}

export default GroupFeedItem
