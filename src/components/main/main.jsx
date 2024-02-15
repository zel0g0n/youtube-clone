import {Stack,Box,Container,Typography} from '@mui/material' 
import { useEffect, useState } from 'react'
import {colors} from '../../constants/colors'
import {Category,Videos} from '../'
import {ApiService} from '../../service/api.service'
const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  const setCategoryHandler = (category) => {
    setSelectedCategory(category)
  }
  useEffect(()=>{
    try {
      const getData =async () => {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.items)
      }
  
      getData()
    } catch (error) {
      console.log(error);
    }

    
  },[])

  return (
    <Stack sx={{maxWidth: '1360px',margin: '0 auto'}}>
      <Category setCategoryHandler={setCategoryHandler} selectedCategory={selectedCategory} />
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'100%'}>
          <Typography variant='h5' mb={2} fontWeight={'bold'}>
            {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos}></Videos>
        </Container>


      </Box>
      
    </Stack>
  )
}

export default Main