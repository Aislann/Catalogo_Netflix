import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { getMovies } from "../api";
import "./Row.css";

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [scrollPosition, setScrollPosition] = React.useState(0);

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
      console.log("Data for series:", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const handleScroll = (scrollDirection) => {
    const cardWidth = rowCardsRef.current?.firstChild.offsetWidth;
    const newScrollPosition =
      scrollPosition +
      (scrollDirection === "left" ? -cardWidth : cardWidth);

    rowCardsRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setScrollPosition(newScrollPosition);
  };

  return (
    <div className="row-container">
      <div className="arrow-container-left" onClick={() => handleScroll("left")}>
        ⬅
      </div>
      <h2 className="row-header">{title}</h2>
      <div
        className="row-cards"
        ref={rowCardsRef}
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {movies?.map((movie) => (
          <>
          <img
            className={`movie-card ${isLarge && "movie-card-large"}`}
            onClick={() => handleOnClick(movie)}
            key={movie.id}
            src={`${imageHost}${
              isLarge ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
          <img
            className={`additional-div `}
          />
          
          </>
        ))}
  
      </div>
      <div className="">
        <div>

        </div>
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
      <div className="arrow-container-right" onClick={() => handleScroll("right")}>
        ➡
      </div>
    </div>
  );
}

export default Row;
