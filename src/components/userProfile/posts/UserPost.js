import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function UserPost(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  return (
    <>
        <Card sx={{ maxWidth: 500}} >
        <CardHeader avatar={
            <Avatar src={`http://localhost:31058${props.userPost.user.imageUrl}`} sx={{ bgcolor: "#4a148c" }} aria-label="recipe">
              Y
            </Avatar> }
          title={props.userPost.user.userName}
        />
        <CardMedia sx={{backgroundColor:"black"}} component="video" height="250"  controls src={`http://localhost:31058${props.userPost.clipUrl}`} />
        <CardContent>
          <Typography  variant="body2" color="text.secondary">
            {props.userPost.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon id="like-icon"/>
          </IconButton>
          <span><b>{props.userPost.numberOfLikes} likes</b></span>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        
      </Card> 
    </>
  );
}
