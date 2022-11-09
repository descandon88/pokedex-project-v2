import React, { useState } from "react";
import "../css/styles.css";
import { Link } from "react-router-dom";

function Cards(props) {
  const PokemonCards = (obj) => {
    return obj.map((obj, index) => (
      <Link to={`PokemonProfile/${obj.nombre}`} className="linkCards">
        <li className="li-Cards" key={index}>
          <div className="Cards" id={obj.type[0]}>
            <div className="CardsUp">
              <p className="Codigo">{"#"+obj.id}</p>
            </div>
            <div className="CardsBody">
              <img className="pokemon" src={obj.img}></img>
            </div>
            <div className="CardsDown" id={obj.type[0] + "2"}>
              <p className="pokeName">
                <b>{obj.nombre}</b>
              </p>
            </div>
          </div>
        </li>
      </Link>
    ));
  };
  return (
    <div className="Card">
      <ul className="ul-Cards">{PokemonCards(props.DatosApi)}</ul>
    </div>
  );
}

export default Cards;
