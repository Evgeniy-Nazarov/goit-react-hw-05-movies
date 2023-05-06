import fetchReviews from 'components/API/FetchReviews';
import { Loader } from 'components/Loader/Loader';
import { Report } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StyledReviews,
  StyledReviewsH3,
  StyledReviewsLi,
  StyledReviewsP,
} from './Reviews.Styled';

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
          <StyledReviews>
            {reviews.map(({ id, author, content }) => (
              <StyledReviewsLi key={id}>
                <StyledReviewsH3>{author}</StyledReviewsH3>
                <StyledReviewsP>{content}</StyledReviewsP>
              </StyledReviewsLi>
            ))}
          </StyledReviews>
        )}
      </>
    );
  }
};

export default Reviews;
