import GalleryItem from 'components/GalleryItem/GalleryItem';

const MoviesGallery = ({ movies }) => {
  movies.map(movie => {
    console.log('movie', movie);
    return <GalleryItem key={movie.id} movie={movie} />;
  });
};
export default MoviesGallery;
