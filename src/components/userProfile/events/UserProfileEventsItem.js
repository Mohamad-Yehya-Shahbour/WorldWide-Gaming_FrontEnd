import React from 'react'
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function UserProfileEventsItem() {
    return (
        <div>
           <Card sx={{ maxWidth: 350}} >
                <CardHeader   avatar={<Avatar sx={{ bgcolor: "#4a148c" }} aria-label="recipe">Y</Avatar>} title="Event Title"/>
                <CardMedia component="img" height="194" image="event-img.jpg" alt="event picture"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve.
                    The game is a sequel to Defense of the Ancients (DotA),.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <span><b>13 Joiner</b></span>
                </CardActions>
            </Card>
        </div>
    )
}

export default UserProfileEventsItem
