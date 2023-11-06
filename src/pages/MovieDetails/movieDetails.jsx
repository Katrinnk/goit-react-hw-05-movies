import { getMovieDetails } from 'api/movies';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { InfoWrap } from './MovieDetail.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        setError('');
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  const handleClickBackBtn = () => {
    navigate(backLinkLocationRef.current);
  };

  return (
    <div>
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={handleClickBackBtn}
      >
        ⬅ Go back
      </button>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {movie && <MovieCard movie={movie} />}
      <InfoWrap>
        <p>Additional information</p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </InfoWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
