import { getMovieReviews } from 'api/movies';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [review, setReview] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError('');
        const { data } = await getMovieReviews(movieId);
        setReview(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {review &&
        (review.results.length ? (
          <ul>
            {review.results.map(descr => (
              <li key={descr.id}>
                <h3>Author: {descr.author}</h3>
                <p>{descr.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </div>
  );
};
export default Reviews;
