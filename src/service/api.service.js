import axios from 'axios'
const baseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key': '38f29c2ce3mshb376203267f393fp1483fdjsnb49285164a45',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const ApiService = {
  async fetching(key) {
    const response = await axios.get(`${baseURL}/${key}`,options)
    return response.data
  }
}