import { Link, useLocation } from 'react-router-dom';
import { Title, Wrap } from './GalleryItem.styled';

const GalleryItem = ({
  movie: { id, original_title, backdrop_path, title },
}) => {
  const location = useLocation();
  return (
    <Wrap className="card">
      <Link to={`/movies/${id}`} state={location}>
        <img
          className="card-img-top"
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w400/${backdrop_path}`
              : `https://cdn2.iconfinder.com/data/icons/admin-tools-2/25/image2-1024.png`
          }
          alt={title}
        />
        <Title className="card-title">{original_title}</Title>
      </Link>
    </Wrap>
  );
};

export default GalleryItem;
