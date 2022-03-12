import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie_Detail.css";

function Movie_Detail({
  rating,
  runtime,
  title,
  coverImage,
  summary,
  genres,
  year,
}) {
  return (
    <div className="movie_detail">
      <h2 className="movie_detaile_title">
        {title} ({year})
      </h2>
      <img src={coverImage} alt={title} />
      <div className="movie_detail_info">
        <span>Rating: {rating} point </span>
        <span>Runtime: {runtime} min </span>
      </div>
      <ul className="movie_detail_genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p className="movie_detail_summary">{summary}</p>
      <div>
        <nav>
          <Link to="/movie/">Home</Link>
        </nav>
      </div>
    </div>
  );
}

Movie_Detail.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie_Detail;
