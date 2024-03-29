import React, { useEffect } from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      ></img>
      
      <ul>
        <Link to={"/App"}>
        Início
        </Link>
        <Link to ={"/Filmes_Page"}>
        Filmes
        </Link>
        <Link to ={"/Series_Page"}>
        Séries
        </Link>
        
      </ul>

      <Link to={"/"}>
      <img
        className="nav-avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        alt="Pasquadev"
      ></img>
      </Link>
      
    </div>
  );
}

export default Nav;
