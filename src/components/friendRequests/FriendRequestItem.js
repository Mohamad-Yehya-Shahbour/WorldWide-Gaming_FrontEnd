import React from 'react'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react'
import api from '../../services/api';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col } from 'react-grid-system';


function FriendRequestItem() {
    const [users, setUsers] = useState([]);
    const [acceptedId, setAcceptedId] = useState(0);
    const [declinedId, setDeclinedId] = useState(0);
    const user1 = localStorage.getItem("user_id");

    if(acceptedId != 0){
        const element = document.getElementById(`accept${acceptedId}`)
        element.setAttribute("disabled", true);
        element.innerHTML="Accepted";
        document.getElementById(`decline${acceptedId}`).setAttribute("disabled", true);

        const data = JSON.stringify({
            user1: user1,
            user2: acceptedId
        })
        api
        .acceptFriend(data)
        .then((response)=>{
            console.log(response.status);
        })
        .catch((error)=>{console.log(error.response)})

        console.log(acceptedId)
        setAcceptedId(0)
    }
    if(declinedId != 0){
        const element1 = document.getElementById(`decline${declinedId}`);
        element1.setAttribute("disabled", true);
        element1.innerHTML="Declined";
        document.getElementById(`accept${declinedId}`).setAttribute("disabled", true);

        const data1 = JSON.stringify({
            user1: user1,
            user2: declinedId
        })
        api
        .declineFriend(data1)
        .then((response)=>{
            console.log(response.status);
        })
        .catch((error)=>{console.log(error.response)})

        console.log(declinedId)
        setDeclinedId(0)
    }


    useEffect(() => {
        api
        .getFriendRequests()
        .then((response)=>{
            setUsers(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    }, []);

    return (
        <div>
            <Container className="p-5">
                <Row>
                    {users.map(user => (
                        <Col sm={3} className="mb-4">
                            <>
                                <Card sx={{ maxWidth: 500}} >
                                    <CardHeader title={user.userOne.userName} />
                                    <CardMedia src={`http://localhost:31058${user.userOne.imageUrl}`} component="img" height="194"  alt="user picture" />
                                    <CardContent>
                                        <Container>
                                            <Row>
                                                <Col sm={6}>
                                                    <Button id={`accept${user.userOneId}`} onClick={() => {setAcceptedId(user.userOneId)}} color="info" >Accept</Button>
                                                </Col>
                                                <Col sm={6}>
                                                    <Button id={`decline${user.userOneId}`} onClick={() => {setDeclinedId(user.userOneId)}} color="error" >Decline</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardContent>
                                </Card> 
                            </>
                        </Col>
                    ))}
                        
     
                </Row>
            </Container>
        </div>
    )
}

export default FriendRequestItem
