import axios from 'axios';
import { API_KEY } from '../Key/TMDBKey';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

const fetchFilmsToday = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export default fetchFilmsToday;
