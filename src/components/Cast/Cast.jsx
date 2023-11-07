import { getMovieCredits } from 'api/movies';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastWrap } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError('');
        const { data } = await getMovieCredits(movieId);
        setCast(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <CastWrap>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {cast &&
        (cast.cast.length ? (
          <ul>
            {cast.cast.map(person => (
              <li className="card" key={person.id}>
                <img
                  className="card-img-top"
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                      : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRULocmP6cP6JYFZmzMlbVHbWwu-oAdX5NaQ&usqp=CAU`
                  }
                  alt={cast.cast.name}
                  width="200px"
                />
                <div className="card-body">
                  <p className="card-text">{person.name}</p>
                  <p className="card-text">Character: {person.character}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any cast for this movie.</p>
        ))}
    </CastWrap>
  );
};
export default Cast;
