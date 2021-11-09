import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import ClipsCard from './ClipsCard';
import { useState, useEffect} from 'react'
import api from '../../services/api';

function ClipsItem() {
    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
        api
        .getTopPosts()
        .then((response)=>{
            //console.log(response.data);
            setTopPosts(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    }, []);

    return (
        <div>
            <Container className="mt-5">
                <Row className="d-flex justify-content-arround m-2">
                    {topPosts.map(topPost =>(
                        <Col sm={4} className="mb-4">
                            <ClipsCard topPost={topPost}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ClipsItem
