import fetchFilmsToday from 'components/API/API';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Styledink from './Home.styled';

const Home = () => {
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const location = useLocation();

  useEffect(() => {
    setStatus('pending');

    const fetchMovies = async () => {
      try {
        const response = await fetchFilmsToday();
        console.log(response.length);
        if (response.length === 0) {
          setStatus('idle');
        }
        if (response.length !== 0) {
          setmovies(response);
          setStatus('resolved');
        }
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };
    fetchMovies();
  }, []);

  if (status === 'idle') {
    return <h1>Enter your search</h1>;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <h1>{error}</h1>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <h1>Trending today</h1>
        {movies &&
          movies.map(movie => (
            <Styledink
              key={movie.id}
              state={{ from: location }}
              to={`movies/${movie.id}`}
            >
              {movie.title}
            </Styledink>
          ))}
      </div>
    );
  }
};

export default Home;
