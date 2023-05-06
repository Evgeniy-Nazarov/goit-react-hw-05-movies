import axios from 'axios';
import { API_KEY } from '../Key/TMDBKey';

const fetchReviews = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export default fetchReviews;
