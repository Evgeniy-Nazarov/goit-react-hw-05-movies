import fetchReviews from 'components/API/FetchReviews';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (movieId) {
      setStatus('pending');
      const searchReviews = async () => {
        try {
          const response = await fetchReviews(movieId);
          if (response.length === 0) {
            setStatus('idle');
            Report.info('No reviews found');
          }
          if (response.length !== 0) {
            setReviews(response);
            setStatus('resolved');
          }
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      };
      searchReviews();
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
        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
};

export default Reviews;
