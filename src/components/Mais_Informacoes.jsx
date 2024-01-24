import React, { useEffect } from "react";
import categories, { getMovies } from "../api";
import "./Mais_Informacoes.css"
import Nav from "./Nav";

const Mais_Informacoes = () => {
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
        <>
        <Nav />
      <header
      
        className="banner-container-tela"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          roundPosition: "center-center",
        }}
      >
        <div className="banner-content-tela">
          <h1 className="banner-title-tela">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-description-tela">
            <h2>{truncate(movie?.overview, 500)}</h2>
          </div>
          <div className="banner-buttons-container-tela">
            <button className="banner-button-tela">
              <span>▶ Assistir</span>
            </button>
          </div> 
        </div>
      </header>
      </>
    );
    
  }

export default Mais_Informacoes