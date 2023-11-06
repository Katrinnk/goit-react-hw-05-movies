import { getTrending } from 'api/movies';
import Loader from 'components/Loader/Loader';
import { MoviesGalleryWrap } from 'components/MoviesGallery/MovieGallery.styled';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);
        setError('');
        const { data } = await getTrending();
        if (!data.results.length) {
          Notify.info(`No movies`);
          return;
        }
        setMovies(data.results);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div>
      <MainTitle>Trending today</MainTitle>
      <MoviesGalleryWrap>
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        {!movies.length ? null : <MoviesGallery movies={movies} />}
      </MoviesGalleryWrap>
    </div>
  );
};
export default Home;
