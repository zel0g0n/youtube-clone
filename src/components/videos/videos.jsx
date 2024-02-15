import { Box, Stack } from "@mui/material"
import { VideoCard } from "../"
const Videos = ({videos}) => {
  return (
    <Stack 
    sx={{
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '20px'
      }}>
    
      {videos.map(item => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos