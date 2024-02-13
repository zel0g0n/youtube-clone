import {Stack,Box,Container,Typography} from '@mui/material' 
import { useState } from 'react'
import {colors} from '../../constants/colors'
import {Category} from '../'
// import {Stack} from 'react-router-dom'
const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  return (
    <Stack>
      <Category/>
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h5' mb={2} fontWeight={'bold'}>
            {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          Videolar bor bu yerda
        </Container>


      </Box>
      
    </Stack>
  )
}

export default Main