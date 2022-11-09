import React, { useState, useEffect } from "react";
import "./profile.css";
import arrowLeft from "./images/arrow-left.svg";
import frame from "./images/Frame.svg";
import weight from "./images/Weight.svg";
import height from "./images/Height.svg";
import { useParams } from "react-router-dom";
import Datos from "../data/datos";
import { Link } from "react-router-dom";
import {
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const PokemonProfile = () => {
  const [apiProfile, setapiProfile] = useState();
  const [apiPokemonPro, setapiPokemonPro] = useState([]);
  const { nombre } = useParams();

  // useEffect(() => {
  //   fetch("http://localhost:3000/pokemons", {
  //     method: "GET",
  //     headers: { "content-Type": "application/json" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("esta es la data" + data);
  //       setapiProfile(data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);

  const pokemonDetail = Datos.filter((arrayDatos) => {
    return arrayDatos.nombre === nombre;
  });
  console.log(pokemonDetail);

  const pokemonIndex = Datos.findIndex((arrayDatos) => {
    return arrayDatos.nombre === nombre;
  });

  const pokemonMoves = (array) => {
    return array.map((array, index) => <li key={index}>{array}</li>);
  };

  console.log("aqui se imprimi el pokemonDetail: ", pokemonDetail[0]);

  // console.log("Los tipos: " + pokemonDetail[0].type[1]);

  return (
    <div
      className="container-description"
      style={{ backgroundColor: pokemonDetail[0].color }}
    >
      <header>
        <div className="header1">
          <Link to={`/Pokedex`}>
            <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
          </Link>
          <h1 className="h1Header">{pokemonDetail[0].nombre}</h1>
          {console.log(pokemonDetail.nombre)}

          <h2 className="h2Header">#{pokemonDetail[0].id}</h2>
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
         
            <ul>{pokemonMoves(pokemonDetail[0].moves)}</ul>
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
            outerRadius={75}
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
};
export default PokemonProfile;
