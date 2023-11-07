import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '109bcd47cacae0c8d94626fc0a0277fa';

export async function getTrending() {
  const data = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
}

export async function getMoviesFromSearch(search) {
  const data = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${search}`
  );
  return data;
}

export async function getMovieDetails(id) {
  const data = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
}

export async function getMovieCredits(id) {
  const data = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return data;
}

export async function getMovieReviews(id) {
  const data = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
}
