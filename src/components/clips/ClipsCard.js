import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


function ClipsCard(props) {
    return (
        <div>
            <Card sx={{ maxWidth: 350}} >
                <CardHeader   avatar={<Avatar src={`http://localhost:31058${props.topPost.user.imageUrl}`} sx={{ bgcolor: "#4a148c" }} aria-label="recipe">Y</Avatar>} title={props.topPost.user.userName}/>
                <CardMedia sx={{backgroundColor:"black"}} component="video" height="250"  controls src={`http://localhost:31058${props.topPost.clipUrl}`}/>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon id="like-icon-clips" color="error"/> 
                    </IconButton>
                    <span><b>{props.topPost.numberOfLikes} likes</b></span>
                </CardActions>
            </Card>
        </div>
    )
}

export default ClipsCard
