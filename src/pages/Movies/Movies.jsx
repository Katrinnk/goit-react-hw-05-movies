import { getMoviesFromSearch } from 'api/movies';
import Loader from 'components/Loader/Loader';
import { MoviesGalleryWrap } from 'components/MoviesGallery/MovieGallery.styled';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import SearchBar from 'components/SearchBar/SearchBar';
import { Notify } from 'notiflix';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  const fetchMovies = useCallback(async searchText => {
    try {
      setIsLoading(true);
      setError('');
      const { data } = await getMoviesFromSearch(searchText);
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
  }, []);

  useEffect(() => {
    query && fetchMovies(query);
  }, [fetchMovies, query]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      <SearchBar />
      {isLoading && <Loader />}
      <MoviesGalleryWrap>
        {!movies.length ? null : <MoviesGallery movies={movies} />}
      </MoviesGalleryWrap>
    </div>
  );
};

export default Movies;
