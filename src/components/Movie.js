import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({
  year,
  rating,
  runtime,
  title,
  coverImage,
  summary,
  genres,
  id,
}) {
  return (
    <div className="movie">
      <h2 className="movie_title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className="movie_year">{year}</h3>
      <img className="movie_img" src={coverImage} alt={title} />
      <div className="movie_info">
        <span>Rating: {rating} point </span>
        <span>Runtime: {runtime} min </span>
      </div>
      <ul className="movie_genres">
        {genres.map((g) => (
          <li key={g} className="movie_genre">
            {g}
          </li>
        ))}
      </ul>
      <p className="movie_summary">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
