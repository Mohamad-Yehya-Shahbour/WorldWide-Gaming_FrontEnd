import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Divider from '@mui/material/Divider';


function UserProfileAbout(props) {
    const data=
        [
            {
                title: "Name",
                Value: props.profile.userName
            },
            {
                title: "Email",
                Value: props.profile.email
            },
            {
                title: "Country",
                Value: props.profile.country
            },
            {
                title: "Region",
                Value: props.profile.region
            },
            {
                title: "Date of Birth",
                Value: props.profile.dob
            },
            {
                title: "Gender",
                Value: props.profile.gender
            },
        ];
    return (
        
        <div>
            <Container>
                {data.map(item => (
                    <>
                    <Row >
                        <Col sm={4}>
                            <h5 style={{color:"gray"}}>{item.title}</h5>
                        </Col>
                        <Col sm={8}>
                            <h5>{item.Value}</h5>
                        </Col>
                    </Row>
                     <Divider sx={{width:"50%", marginLeft:"0", marginBottom:"20px"}} variant="middle"/>
                     </>
                ))}
            </Container>
        </div>
    )
}

export default UserProfileAbout
