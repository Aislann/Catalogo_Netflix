import React, { useEffect } from "react";
import categories, { getMovies } from "../api";
import "./Banner.css";
import { InfoIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = React.useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error: ", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-description">
          <h2>{truncate(movie?.overview, 200)}</h2>
        </div>
        <div className="banner-buttons-container">
          <button className="banner-button">
            <span>▶ Assistir</span>
            </button>
          <button className="banner-button2">
           <Link to={"/Mais_Informacoes"}>
           <span>
            <InfoIcon className="style-icon"/> Mais Informações </span>
           </Link> 
           
           
          </button>
        </div> 
      </div>
    </header>
  );
}

export default Banner;
