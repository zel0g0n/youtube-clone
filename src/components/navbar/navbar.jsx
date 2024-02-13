import {Stack,Box} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../../constants/constants'
import {colors} from '../../constants/colors'
import {SearchBar} from '../'
const Navbar = () => {
  return (
    <Stack 
      direction='row' 
      alignItems='center' 
      justifyContent='space-between' 
      p={2} 
      sx={{position: 'sticky', top: 0, background: colors.primary, width: '1360px',margin: '0 auto'}}
    >
      <Link to='/'>
        <img src={logo} alt="logo" height={30} width={60} />
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar