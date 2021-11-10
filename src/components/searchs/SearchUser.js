import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import FeedOutlined from '@mui/icons-material/FeedOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';
import Search from '../Search';
import AccountMenu from '../AccountMenu';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react'
import api from '../../services/api';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Notifications from '../Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';





const drawerWidth = 240;

function SearchUser(props) {
  const history = useHistory();
  const[users, setUsers] = useState([])
  const[user2, setUser2] = useState(0);
  const user1 = localStorage.getItem("user_id");
  

  if(user2 != 0){
    console.log(user2)
    const element = document.getElementById(`add${user2}`);
    element.setAttribute("disabled", true);
    element.innerHTML="request sent";

    const connection = JSON.stringify({
        user1: user1,
        user2: user2,
      });
      api
      .addFriends(connection)
      .then((response)=>{
          console.log(response.data);
      })
      .catch((error)=>{console.log(error.response)})

      setUser2(0)
  }
 


  useEffect(() => {
    api
    .getUsersByName()
    .then((response)=>{
        setUsers(response.data);
    })
    .catch((error)=>{console.log(error.response)})
}, []);


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const data=[
    {
      page:"Feed",
      path:"/feed",
      icon: <FeedOutlined fontSize="large" />
    },
    {
      page:"Clips",
      path:"/clips",
      icon: <SlowMotionVideoOutlinedIcon fontSize="large"/>
    },
    {
      page:"Groups",
      path:"/groups",
      icon: <GroupsOutlinedIcon fontSize="large"/>
    },
    {
      page:"Events",
      path:"/events",
      icon: <EventNoteRoundedIcon fontSize="large" />
    },
    {
        page:"Requests",
        path:"/requests",
        icon: <PersonAddIcon fontSize="large" />
      },
      {
        page:"Chart",
        path:"/chart",
        icon: <BarChartIcon fontSize="large" />
      },
  ]

  ;
  const drawer = (
    <div>
      <Toolbar>
        <Typography  variant="h6" noWrap component="div">
           <b> WorldWide Gaming </b>
        </Typography>
      </Toolbar>
      <Divider />
      <List key={"groupss"}>
        {data.map((item,i)=>(
          <>
            <ListItem key={`search${item.path}`} sx={{marginBottom:"9px"}} button onClick={()=>{
                          history.push(item.path)}
                          }>
              <ListItemIcon key={i} >
                {item.icon}
              </ListItemIcon>
              <ListItemText key={item.page} ><b>{item.page}</b></ListItemText>
            </ListItem>
          </>
        ))}
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar color="default"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:"white"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search history={history}/>
          <Container style={{marginRight:"0"}}>
              <Row>
                <Col sm={12}>
                <Notifications/>
                </Col>
              </Row>
            </Container>
            <AccountMenu/>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box style={{ boxSizing: 'border-box'}}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar color="secondary"/>
        <h3><b>Search Results:</b></h3>
        <Container className="p-5">
            <Row>
                {users.map(user=>(
                    <Col sm={3} className="mb-4">
                        <>
                            <Card sx={{ maxWidth: 500}} >
                                <CardHeader title={user.userName} />
                                <CardMedia src={`http://localhost:31058${user.imageUrl}`} component="img" height="194"  alt="user picture" />
                                <CardContent>
                                    <Button color="secondary" id={`add${user.id}`} onClick={()=>{setUser2(user.id)}}>Add Friend</Button>
                                </CardContent>
                            </Card> 
                        </>
                    </Col>
                ))}
            </Row>
        </Container>
      </Box>
    </Box>
  );
}


export default SearchUser;

