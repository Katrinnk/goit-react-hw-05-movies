import GalleryItem from 'components/GalleryItem/GalleryItem';

const MoviesGallery = ({ movies }) => (
  <div>
    {movies.map(movie => (
      <GalleryItem className="gallery-item" key={movie.id} movie={movie} />
    ))}
  </div>
);
export default MoviesGallery;
