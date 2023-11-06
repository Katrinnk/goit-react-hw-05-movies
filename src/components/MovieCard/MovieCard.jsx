import { MovieCardWrap } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrap className="card">
      <img
        className="card-img-top"
        src={
          movie.backdrop_path &&
          `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        }
        alt={movie.title}
      />
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-text">Release date: {movie.release_date}</p>
        <h3 className="card-title">Overview</h3>
        <p className="card-text">{movie.overview}</p>
        <h4 className="card-title">Genres</h4>
        <ul>
          {movie.genres.map(movie => (
            <li className="card-text" key={movie.id}>
              {movie.name}
            </li>
          ))}
        </ul>
      </div>
    </MovieCardWrap>
  );
};

export default MovieCard;
