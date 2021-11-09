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
import  Comment  from './comments/Comment';
import  CommentInput  from './comments/CommentInput';
import { useState, useEffect} from 'react'
import api from '../../services/api';
import {Grid, Paper } from "@material-ui/core";


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

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [comments, setComments] = useState([]);
  const postId = props.post.id;
  const likeId = "like-icon";
  const likedId = "likeIcon";
  const [isLiked, setIsLiked] = useState(false)
  useEffect(() => {
    api
    .getPostComments(postId)
    .then((response)=>{
        console.log(response.data);
        setComments(response.data);
    })
    .catch((error)=>{console.log(error.response)})
}, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  return (
    <>
        <Card sx={{ maxWidth: 500}} >
        <CardHeader avatar={
            <Avatar sx={{ bgcolor: "#4a148c" }} aria-label="recipe" src={`http://localhost:31058${props.post.user.imageUrl}`}>
              Y
            </Avatar> }
          title={props.post.user.userName}
        />
        <CardMedia sx={{backgroundColor:"black"}} component="video" height="250"  controls src={`http://localhost:31058${props.post.clipUrl}`} />
        <CardContent>
          <Typography  variant="body2" color="text.secondary">
            {props.post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton  button onClick={(e)=>{e.preventDefault();setIsLiked(true)}} aria-label="add to favorites">
            <FavoriteIcon id="like-icon" />
          </IconButton>
          <span><b>{props.post.numberOfLikes} likes</b></span>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          {comments.map(comment=>(
                <Paper style={{ padding: "10px 10px", marginTop: 5,}}>
                    <Grid container wrap="nowrap" spacing={3}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={`http://localhost:31058${comment.userWhoComments.imageUrl}`} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <p style={{ margin: 2, textAlign: "left", fontSize: "1em" }}>{comment.userWhoComments.userName}</p>
                            <p style={{ textAlign: "left", fontSize: "0.7em" }}>
                            {comment.body}{" "}
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
            <CommentInput postId={postId} />
          </CardContent>
        </Collapse>
      </Card> 
    </>
  );
}
