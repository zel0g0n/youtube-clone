import { Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import {Main,Channel,Search,Video,Navbar} from '../'
function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/channel/:id' element={<Channel/>}/>
        <Route path='/search/:id' element={<Search/>}/>
        <Route path='/video/:id' element={<Video/>}/>
      </Routes>
    </Box>

  )
}
export default App