import { Stack } from '@mui/material'
import {category} from '../../constants/constants'
import {colors} from '../../constants/colors'
import './category.css'

const Category = ({selectedCategory,setCategoryHandler}) => {
  return (
    <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'start'} m={'auto'} sx={{width: '1000px', overflow: 'hidden'}}>
      {category.map(item => (
        <button 
          onClick={()=>setCategoryHandler(item.name)} 
          key={item.name} 
          className='category-btn'
          style={{background: selectedCategory == item.name && colors.secondary}}
        
        >
          <span style={{color: selectedCategory == item.name && '#fff'}}>{item.icon}</span>
          <span style={{color: selectedCategory == item.name && '#fff'}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category