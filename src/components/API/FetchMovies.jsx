import axios from 'axios';
import { API_KEY } from '../Key/TMDBKey';

const fetchMovies = async searchQuery => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return response.data.results;
};

export default fetchMovies;
