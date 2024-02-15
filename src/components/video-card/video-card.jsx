import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import {colors} from '../../constants/colors'
import moment from 'moment'
import { CheckCircle } from "@mui/icons-material"
const VideoCard = ({video}) => {

  return (
    <Card
      sx={{
        width: '360px',
        borderRadius: 0,
        boxShadow: 'none'
      }}
    >
      <CardMedia
        sx ={{
          width: '360px',
          height: '200px',
        }}
        alt={video?.snippet?.title}
        image={video?.snippet?.thumbnails?.high?.url}
      >
        
      </CardMedia>
      <CardContent
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: colors.primary,
          height: '200px',
          position: 'relative'
        }}
      >
        <Typography sx={{opacity: '.4'}}>
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold'}}>
          {video?.snippet?.title.slice(0,50)+'...'}

        </Typography>
        <Typography variant='subtitle2' sx={{opacity: '.6'}}>
          {video?.snippet?.description.slice(0,70)+'...'}

        </Typography>
        <Stack
          position={'absolute'}
          direction={'row'}
          alignItems={'center'}
          bottom={'10px'}
          gap={'5px'}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
          <Typography variant="subtitle2" color={'gray'}>
            {video?.snippet?.channelTitle}
            <CheckCircle sx={{fontSize: '12px',color: 'gray',marginLeft: '5px'}}></CheckCircle>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default VideoCard