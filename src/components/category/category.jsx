import { Stack } from '@mui/material'
import {category} from '../../constants/constants'
import './category.css'

const Category = () => {
  return (
    <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'start'} m={'auto'} sx={{width: '1360px', overflowX: 'hidden'}}>
      {category.map(item => (
        <button key={item.name} className='category-btn'>
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category