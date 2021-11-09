import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Row, Col } from 'react-grid-system';
import Feed from '../home/Feed';
import UserProfileGroups from './groups/UserProfileGroups';
import UserProfileEvents from './events/UserProfileEvents';
import UserProfileAbout from './about/UserProfileAbout';
import { useState, useEffect} from 'react'
import api from '../../services/api';
import UserPost from './posts/UserPost'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';




function UserProfileItem() {
    const [value, setValue] = React.useState('1');
    const [userPosts, setUserPosts] = useState([]);
    const [groups , setGroups] = useState([]);
    const [userGroups, setUserGroups] = useState([]);
    const [events, setEvents] = useState([]);
    const [userEvents, setUserEvents] = useState([]);
    const [friends, setFriends] = useState([]);
    const [profile, setProfile] = useState({});
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    useEffect(() => {
        api
        .userPosts()
        .then((response)=>{
            console.log(response.data);
            setUserPosts(response.data);
        })
        .catch((error)=>{console.log(error.response)})

        api
        .getUserGroupsById()
        .then((response)=>{
            console.log(response.data);
            setUserGroups(response.data)
        })
        .catch((error)=>{console.log(error.response)})
    
        api
        .getUserGroups()
        .then((response)=>{
            console.log(response.data);
            setGroups(response.data)
        })
        .catch((error)=>{console.log(error.response)})

        api
        .getUserEvents()
        .then((response)=>{
            console.log(response.data);
            setEvents(response.data)
        })
        .catch((error)=>{console.log(error.response)})

        api
        .getUserEventsById()
        .then((response)=>{
            console.log(response.data);
            setUserEvents(response.data)
        })
        .catch((error)=>{console.log(error.response)})

        api
        .getUserFriends()
        .then((response)=>{
            console.log(response.data);
            setFriends(response.data)
        })
        .catch((error)=>{console.log(error.response)})

        api
        .userProfile()
        .then((response)=>{
            console.log(response.data);
            setProfile(response.data)
        })
        .catch((error)=>{console.log(error.response)})
    }, []);
    return (
        <div>
            <Container className="p-0 pr-0">
                <Row >
                    <Col sm={8}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value} >
                            <Box sx={{  borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="">
                                <Tab label="Posts" value="1" />
                                <Tab label="Groups" value="2" />
                                <Tab label="Events" value="3" />

                                <Tab label="About" value="5" />
                            </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Container >
                                    <Row>
                                        {userPosts.map((userPost) =>(
                                            <Col sm={12} className="d-flex align-items-center justify-content-center mb-5">
                                                <UserPost userPost={userPost}/>  
                                            </Col>
                                        ))} 
                                    </Row>
                                </Container>
                            </TabPanel>
                            <TabPanel value="2"><UserProfileGroups groups={groups} userGroups={userGroups}/></TabPanel>
                            <TabPanel value="3"><UserProfileEvents events={events} userEvents={userEvents}/></TabPanel>
                            <TabPanel value="5"><UserProfileAbout profile={profile}/></TabPanel>
                        </TabContext>
                    </Box>
                    </Col>
                    <Col style={{marginTop:"60px"}}  sm={4} className="d-flex justify-content-start ml-auto p-2 shadow p-3 mb-5 bg-body rounded">
                        <Container style={{marginLeft:"0", }}>
                        <Row>
                            <Col sm={12}>
                                <h4><b style={{color:"#814fa1"}}>Friends</b></h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{paddingLeft:"0"}} sm={12}>
                            <List sx={{ width: '100%', paddingLeft:"0" }}>
                                {friends.map(friend=>(
                                    <ListItem  button  onClick={(e)=>{e.preventDefault(); console.log("group")}} >
                                        <ListItemAvatar >
                                            <Avatar alt="Remy Sharp" src={`http://localhost:31058${friend.imageUrl}`} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary= {friend.userName}/>    
                                    </ListItem>
                                ))}
                            </List>
                            </Col>
                        </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default UserProfileItem
