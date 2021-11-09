import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import EventsItemMap from './map/EventsItemMap';
import CreateEvent from './CreateEvent';



function EventsItem() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} className="">
                    <h2><b>Events</b></h2>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-end">
                        <CreateEvent/>
                    </Col>
                </Row>
            </Container>
            <Container sx={{padding:0}}>
                <Row>
                    <Col className="" sm={12} style={{width:"100%", height:"100vh"}}>
                        <EventsItemMap/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EventsItem
