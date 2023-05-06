import fetchFilmDetails from 'components/API/FetchFilmsDetails';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Styledink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: red;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 1rem;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (movieId) {
      setStatus('pending');
      const searchFilm = async () => {
        try {
          const response = await fetchFilmDetails(movieId);
          if (response === null) {
            Report.info('No results were found for your search.');
            setStatus('Idle');
          }
          if (response !== null) {
            setMovie(response);
            setStatus('resolved');
          }
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      };
      searchFilm();
    }
  }, [movieId]);

  if (status === 'idle') {
    return <h1>Enter your search query</h1>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <h1>{error}</h1>;
  }
  if (status === 'resolved') {
    return (
      <StyledContainer>
        {movie && (
          <>
            <Styledink to={backLink.current}>Go back</Styledink>
            <StyledImg
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <p>User Score: {movie.popularity}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>

              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </StyledContainer>
    );
  }
};

export default MovieDetails;
