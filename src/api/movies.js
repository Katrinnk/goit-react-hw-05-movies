import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '109bcd47cacae0c8d94626fc0a0277fa';

export async function getTrending() {
  const data = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return data;
}
