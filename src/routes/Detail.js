import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie_Detail from "../components/Movie_Detail";
import "./Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="detail_div">
          <Movie_Detail
            rating={movie.rating}
            runtime={movie.runtime}
            title={movie.title}
            coverImage={movie.medium_cover_image}
            summary={movie.description_full}
            genres={movie.genres}
            year={movie.year}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
