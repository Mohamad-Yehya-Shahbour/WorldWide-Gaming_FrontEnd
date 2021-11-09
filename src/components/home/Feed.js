import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Post from './Post';
import { useState, useEffect} from 'react'
import api from '../../services/api';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        api
        .friendsPosts()
        .then((response)=>{
            console.log(response.data);
            setPosts(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    }, []);
    return (
        <div>
            <Container >
            {posts.map((post) =>(
                <Row>
                    <Col sm={11} className="d-flex align-items-center justify-content-center mb-5">
                        <Post post={post}/>  
                    </Col>
                </Row>
            ))}  
            </Container>
        </div>
    )
}

export default Feed
