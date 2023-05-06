import fetchMovies from 'components/API/FetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import { useMemo, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const location = useLocation();
  const searchQuery = searchParams.get('name') ?? '';

  const searchMovies = async () => {
    setStatus('pending');
    if (searchQuery === '') {
      Report.info('Please enter your search query');
      setStatus('idle');
      return;
    }
    try {
      const response = await fetchMovies(searchQuery);
      if (response.length === 0) {
        setStatus('idle');
        Report.failure('No results found');
        return;
      }
      if (response.length !== 0) {
        setMovies(response);
        setStatus('resolved');
      }
    } catch (error) {
      setError(error);
      setStatus('rejected');
    }
  };

  const filteredMovies = useMemo(() => {
    if (!movies) {
      return null;
    }
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [movies, searchQuery]);

  const updateQuery = name => {
    const nextParams = name ? { name } : {};
    setSearchParams(nextParams, {
      keep: true,
      replace: true,
    });
  };

  if (status === 'idle') {
    return (
      <div>
        <h1>Movies</h1>
        <input
          type="text"
          value={searchQuery || ''}
          onChange={e => updateQuery(e.target.value || undefined)}
        />
        <button onClick={searchMovies}>Search</button>
        <Outlet />
      </div>
    );
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return (
      <div>
        <h1>Movies</h1>
        <input
          type="text"
          value={searchQuery || ''}
          onChange={e => updateQuery(e.target.value || undefined)}
        />
        <button onClick={searchMovies}>Search</button>
        <h2>{error}</h2>
        <Outlet />
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <div>
        <h1>Movies</h1>
        <input
          type="text"
          value={searchQuery || ''}
          onChange={e => updateQuery(e.target.value || undefined)}
        />
        <button onClick={searchMovies}>Search</button>
        {filteredMovies &&
          movies.map(movie => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        <Outlet />
      </div>
    );
  }
};

export default Movies;
