import fetchMovieCast from 'components/API/FetchMovieCast';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      setStatus('pending');
      const fetchCast = async () => {
        try {
          const response = await fetchMovieCast(movieId);
          if (response.length === 0) {
            setStatus('idle');
            Report.info('No cast found');
          }
          if (response.length !== 0) {
            setCast(response);
            setStatus('resolved');
          }
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      };
      fetchCast();
    }
  }, [movieId]);

  if (status === 'idle') {
    return <> </>;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <p>{error}</p>;
  }

  if (status === 'resolved') {
    return (
      <>
        {cast && (
          <ul>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
};
export default Cast;
