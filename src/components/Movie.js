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
    <Link to={`/movie/${id}`}>
      <div className="movie">
        <img className="movie_img" src={coverImage} alt={title} />
        <div>
          <h2 className="movie_title">{title}</h2>
          <h3 className="movie_year">{year}</h3>
          <ul className="movie_genres">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <div className="movie_info">
            <span>Rating: {rating} point </span>
            <span>Runtime: {runtime} min </span>
          </div>
          <div>
            <h4>Sumary</h4>
            <p className="movie_summary">
              {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
            </p>
          </div>
        </div>
      </div>
    </Link>
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
