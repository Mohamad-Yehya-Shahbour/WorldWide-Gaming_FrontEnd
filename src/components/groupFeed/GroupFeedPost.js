import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


export default function GroupFeedPost(props) {

  return (
    <Card sx={{ borderRadius: 6 }} style={{ minWidth: "80%",}} >
      <CardHeader
        avatar={
          <Avatar src={`http://localhost:31058${props.groupPost.user.imageUrl}`} sx={{ bgcolor: "#4a148c" }} aria-label="recipe">
            Y
          </Avatar>
        }
        title={props.groupPost.user.userName}
        />
      <Divider/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.groupPost.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

