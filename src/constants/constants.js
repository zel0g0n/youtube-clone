import {
  Checkroom,
  DeveloperMode, 
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School, 
  SportsEsports, 
  TheaterComedy
} from '@mui/icons-material'
export const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/2560px-Youtube.png'

export const category = [
  {name: 'New',icon: <Home />},
  {name: 'Movie',icon: <OndemandVideo />},
  {name: 'Live',icon: <LiveTv/>},
  {name: 'Gaming',icon: <SportsEsports/>},
  {name: 'Education',icon: <School/>},
  {name: 'Sport',icon: <FitnessCenter/>},
  {name: 'Comedy',icon: <TheaterComedy/>},
  {name: 'Podcast',icon: <GraphicEq/>},
  {name: 'Fashion',icon: <Checkroom/>},
  {name: 'Crypto',icon: <DeveloperMode/>},
  {name: 'Beauty',icon: <FaceRetouchingNatural/>},
  {name: 'Music',icon: <MusicNote/>},
]