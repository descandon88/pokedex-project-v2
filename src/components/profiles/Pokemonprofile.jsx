import React, { useState } from "react";
import "./profile.css";
import arrowLeft from "./images/arrow-left.svg";
// import bulbasaur from "./images/bulbasaur.png";
import frame from "./images/Frame.svg";
import weight from "./images/Weight.svg";
import height from "./images/Height.svg";
import { useParams } from "react-router-dom";
import Datos from "../data/datos";
import { Link, useLocation } from "react-router-dom";
import {
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import PokemonError from "../profiles/ErrorPokemon";

// import Chart from "react-apexcharts";

const PokemonProfile = () => {
  const { nombre } = useParams();

  const pokemonDetail = Datos.filter((arrayDatos) => {
    return arrayDatos.nombre === nombre;
  });
  console.log(pokemonDetail);
  /*if (pokemonDetail.length == 0) {
    return (
      <div >
       <PokemonError/>
      </div>
    );
  }*/
  const pokemonIndex = Datos.findIndex((arrayDatos) => {
    return arrayDatos.nombre === nombre;
  });

  // const pokemonTypes = Datos.filter((arrayTypes) => {
  //   if (arrayTypes.nombre === nombre) {
  //     return arrayTypes.type;
  //   }
  // });
  const pokemonMoves = (array) => {
    return array.map((array, index) => (
      <li key={index} className="listHabilities">
        {array}
      </li>
    ));
  };

  console.log("Los tipos: " + pokemonDetail[0].type[1]);

  let pokemonPre = "";
  let pokemonPos = "";
  Datos.forEach(function (arreglo, index) {
    if (arreglo.nombre === pokemonDetail[0].nombre) {
      console.log("prueba:" + arreglo.nombre + index);
      if (index === 0 || index === 8) {
        pokemonPre = Datos[index];
        pokemonPos = Datos[index];
      } else {
        pokemonPre = Datos[index - 1];
        pokemonPos = Datos[index + 1];
      }
    }
  });
  const pokemonPrevius = pokemonPre;
  const pokemonPost = pokemonPos;
  console.log(pokemonPre.nombre);
  return (
    <div
      className="container-description"
      style={{ backgroundColor: pokemonDetail[0].color }}
    >
      <header>
        <div className="header1">
          <div className="div1">
            <Link to={`/Pokedex`}>
              <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
            </Link>
          </div>
          <div className="div2">
            <h1 className="h1Header">{pokemonDetail[0].nombre}</h1>
          </div>

          {console.log(pokemonDetail.nombre)}
          <div className="div3">
            <h2 className="h2Header">#{pokemonDetail[0].id}</h2>
          </div>
        </div>
      </header>

      <main>
        <div className="image-section">
          {Datos[pokemonIndex - 1] && (
            <Link
              to={`/Pokedex/PokemonProfile/${Datos[pokemonIndex - 1].nombre}`}
            >
              <img className="frame-left" src={frame} alt="Frame" />
            </Link>
          )}

          <img className="pokemon-image" src={pokemonDetail[0].img} alt="#" />

          {Datos[pokemonIndex + 1] && (
            <Link
              to={`/Pokedex/PokemonProfile/${Datos[pokemonIndex + 1].nombre}`}
            >
              <img className="frame-right" src={frame} alt="Frame" />
            </Link>
          )}
        </div>
        <div className="types-sections-container">
          {pokemonDetail[0].type[0] && (
            <button
              className="types-tag "
              style={{ backgroundColor: pokemonDetail[0].color }}
            >
              {pokemonDetail[0].type[0]}
            </button>
          )}
          {pokemonDetail[0].type[1] && (
            <button className="violeta">{pokemonDetail[0].type[1]}</button>
          )}
        </div>
        <div className="about-subtitle">
          <h4 style={{ color: pokemonDetail[0].color }}>About</h4>
        </div>

        <div className="info">
          <div className="weight">
            <img src={weight} alt="Peso" /> <p>{pokemonDetail[0].weight}</p>
          </div>
          <div className="height">
            <img src={height} alt="Altura" />
            <p> {pokemonDetail[0].height}</p>
          </div>
          <div className="moves">
            <ul className="listUl">{pokemonMoves(pokemonDetail[0].moves)}</ul>
          </div>
        </div>
        <div className="miniTitle">
          <p>Weight</p>
          <p>Height</p>
          <p>Moves</p>
        </div>

        <p className="pokemon-description">{pokemonDetail[0].description}</p>
        <h4
          className="title-BaseStats"
          style={{ color: pokemonDetail[0].color }}
        >
          Base Stats
        </h4>

        <div className="BaseStats-box">
          <RadarChart
            outerRadius={70}
            width={350}
            height={250}
            cy={"40%"}
            data={pokemonDetail[0].stats}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="skills" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name={pokemonDetail[0].name}
              dataKey="Quantity"
              stroke={pokemonDetail[0].color}
              fill={pokemonDetail[0].color}
              fillOpacity={0.55}
            />

            <Legend />
          </RadarChart>
        </div>
      </main>
    </div>
  );

  // return Profile(Datos);
};
// };
export default PokemonProfile;
