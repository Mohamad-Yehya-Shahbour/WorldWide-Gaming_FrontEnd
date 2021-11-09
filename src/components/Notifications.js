import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState, useEffect} from 'react'
import api from '../services/api'

export default function Notifications() {
  const [notifs, setNotifs] = useState([]);

  useEffect(() => {
    api
    .getNotif()
    .then((response)=>{
        //console.log(response.data);
        setNotifs(response.data);
    })
    .catch((error)=>{console.log(error.response)})
  }, []);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"#8130b8"}}
      >
        Notifications <span className="ml-1 badge badge-pill badge-secondary">{notifs.length}</span>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {notifs.map(notif=>(
          <MenuItem key={`notif${notif.user1.id}`}  onClick={handleClose}>{notif.user1.userName} <br/> created an event</MenuItem>
        ))}
        
        
      </Menu>
    </div>
  );
}
