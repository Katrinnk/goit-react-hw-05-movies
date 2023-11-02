import { getTrending } from 'api/movies';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { data } = await getTrending();
        setMovies([data.results]);
        if (data.results.length === 0) {
          Notify.failure('Sorry, we not find films');
        }
      } catch (e) {
        Notify.failure(e);
      }
    };
    fetchTrending();
  }, []);

  console.log('movies from home', movies);
  return (
    <>
      <h2>Home</h2>
      <MoviesGallery movies={movies} />
    </>
  );
};
export default Home;
