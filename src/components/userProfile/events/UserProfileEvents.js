import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import UserProfileEventsItem from './UserProfileEventsItem';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function UserProfileEvents(props) {
    console.log(props.userEvents)
  return (
    <div>
        <Container className="mt-2">
            <Row className="d-flex justify-content-arround">
                <Col sm={6}>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-center mb-3" >
                            <h5><b>Created Events</b></h5>
                            <Divider/>
                        </Col>
                    </Row>
                        {props.userEvents.map(userEvent=>(
                            <Row className="mb-5">
                                <Col sm={12} className="d-flex justify-content-center" >
                                    <Card sx={{ maxWidth: 350}} >
                                        <CardHeader   avatar={<Avatar src={`http://localhost:31058${userEvent.user.imageUrl}`}  sx={{ bgcolor: "#814fa1" }} aria-label="recipe"></Avatar>} title={userEvent.title}/>
                                        <CardMedia component="img" height="194" src={`http://localhost:31058${userEvent.imageUrl}`} alt="event picture"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                            {userEvent.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <span><b>{userEvent.joinersNum} Joiner</b></span>
                                        </CardActions>
                                    </Card>
                                </Col>
                            </Row>
                        ))}     
                </Col>
                <Col sm={6}>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-center mb-3">
                            <h5><b>Joined Events</b></h5>
                            <Divider/>
                        </Col>
                    </Row>
                        {props.events.map(event=>(
                            <Row className="mb-5">
                                <Col sm={12} className="d-flex justify-content-center">
                                    <Card sx={{ maxWidth: 350}} >
                                        <CardHeader   avatar={<Avatar src={`http://localhost:31058${event.user.imageUrl}`} sx={{ bgcolor: "#4a148c" }} aria-label="recipe">Y</Avatar>} title={event.title}/>
                                        <CardMedia component="img" height="194" src={`http://localhost:31058${event.imageUrl}`} alt="event picture" />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                            {event.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <span><b>{event.joinersNum} Joiner</b></span>
                                        </CardActions>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                </Col>
            </Row>
        </Container> 
    </div>
  );
}

