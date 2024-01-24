import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { getMovies } from "../api";


const imageHost = "https://image.tmdb.org/t/p/original/";

function Filmes_Series({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [setScrollPosition] = React.useState(0);

  const rowCardsRef = useRef(null);

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const searchQuery = movie.title || movie.name || movie.original_name || "";
      movieTrailer(searchQuery)
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  };
  

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container-outros">
      <h2 className="row-header-outros">{title}</h2>
      <div
        className="row-cards-outros"
        ref={rowCardsRef}
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {movies?.map((movie) => (
          <>
          <img
            className={`movie-card-outros ${isLarge && "movie-card-large-outros"}`}
            onClick={() => handleOnClick(movie)}
            key={movie.id}
            src={`${imageHost}${
              isLarge ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
          
          </>
        ))}
  
      </div>
      <div className="">
        <div>

        </div>
      </div>
    </div>
  );
}

export default Filmes_Series;
