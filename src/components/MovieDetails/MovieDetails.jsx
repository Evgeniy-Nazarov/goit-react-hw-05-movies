import fetchFilmDetails from 'components/API/FetchFilmsDetails';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledMovieDetails,
  StyledMovieDetailsGoBack,
  StyledMovieDetailsH1,
  StyledMovieDetailsH2,
  StyledMovieDetailsH3,
  StyledMovieDetailsImg,
  StyledMovieDetailsLi,
  StyledMovieDetailsLink,
  StyledMovieDetailsP,
  StyledMovieDetailsUl,
} from './StyledMovieLink.Styled';

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
      <StyledMovieDetails>
        {movie && (
          <>
            <StyledMovieDetailsGoBack to={backLink.current}>
              Go back
            </StyledMovieDetailsGoBack>
            <StyledMovieDetailsImg
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <StyledMovieDetailsH1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </StyledMovieDetailsH1>
            <StyledMovieDetailsP>
              User Score: {movie.popularity}
            </StyledMovieDetailsP>
            <StyledMovieDetailsH2>Overview</StyledMovieDetailsH2>
            <StyledMovieDetailsP>{movie.overview}</StyledMovieDetailsP>
            <StyledMovieDetailsH3>Genres</StyledMovieDetailsH3>
            <StyledMovieDetailsUl>
              {movie.genres.map(genre => (
                <StyledMovieDetailsLi key={genre.id}>
                  {genre.name}
                </StyledMovieDetailsLi>
              ))}
            </StyledMovieDetailsUl>
            <StyledMovieDetailsH3>Additional information</StyledMovieDetailsH3>
            <StyledMovieDetailsUl>
              <StyledMovieDetailsLi>
                <StyledMovieDetailsLink to="cast">Cast</StyledMovieDetailsLink>
              </StyledMovieDetailsLi>

              <StyledMovieDetailsLi>
                <StyledMovieDetailsLink to="reviews">
                  Reviews
                </StyledMovieDetailsLink>
              </StyledMovieDetailsLi>
            </StyledMovieDetailsUl>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </StyledMovieDetails>
    );
  }
};

export default MovieDetails;
