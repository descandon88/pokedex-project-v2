import React from "react";
import "../Home/Home.css";
import Pokeball from "../data/img/pokeball.png";
import PokedexLogo from "../data/img/Pokedex_Logo.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="Logos">
        <div className="pokeball"></div>
        <div className="pokedexLogo"></div>
      </div>
      <Link className="button" to={`Pokedex/`}>
        Entrar
      </Link>
      <h1>&copy; David Escandón, Raúl Del Castillo y Nicolás García</h1>
    </div>
  );
};

export default Home;
