import fetchMovieCast from 'components/API/FetchMovieCast';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import {
  StyledCast,
  StyledCastH3,
  StyledCastImg,
  StyledCastLi,
  StyledCastP,
} from './Cast.Styled';
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
        <StyledCast>
          {cast.map(({ id, profile_path, name, character }) => (
            <StyledCastLi key={id}>
              <StyledCastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                }
                alt={name}
              />
              <StyledCastH3>{name}</StyledCastH3>
              <StyledCastP>Character: {character}</StyledCastP>
            </StyledCastLi>
          ))}
        </StyledCast>
      </>
    );
  }
};
export default Cast;
