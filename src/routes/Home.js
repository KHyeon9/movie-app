import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=yearr"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="background_home">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="background_list">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              coverImage={movie.medium_cover_image}
              year={movie.year}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
