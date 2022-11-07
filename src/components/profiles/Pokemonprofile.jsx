import React, { useState } from "react";
import "./profile.css";
import arrowLeft from "./images/arrow-left.svg";
// import bulbasaur from "./images/bulbasaur.png";
import frame from "./images/Frame.svg";
import weight from "./images/Weight.svg";
import height from "./images/Height.svg";
import { useParams } from "react-router-dom";
import Datos from "../data/datos";
import { Link } from "react-router-dom";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
// import Chart from "react-apexcharts";

const PokemonProfile = () => {
  const { nombre } = useParams();

  const pokemonDetail = Datos.filter((arrayDatos) => {
    return arrayDatos.nombre === nombre;
  });
  console.log(pokemonDetail);

  // const pokemonPrevius = Datos.forEach((arreglo, index) => {
  //   if (arreglo.nombre === pokemonDetail[0].nombre) {
  //     return Datos[index - 1].nombre;
  //   }
  // });
  let pokemonPrevius = "";
  let pokemonPost = "";
  Datos.forEach(function (arreglo, index) {
    if (arreglo.nombre === pokemonDetail[0].nombre) {
      console.log("prueba:" + arreglo.nombre + index);
      pokemonPrevius = Datos[index - 1];
      pokemonPost = Datos[index + 1];
    }
  });
  const pokemonPre = pokemonPrevius;
  console.log(pokemonPre.nombre);

  //   Array.from(Datos).filter(([index, nombre]) => {
  //     if (Array.nombre === pokemonDetail[0].nombre) {
  //       return Array[index - 1].nombre;
  //     }
  //   })
  //   // => {
  //   // if (Array.nombre === pokemonDetail[0].nombre) {
  //   //   return Datos[index - 1].nombre;
  //   // }
  // );
  // console.log(pokemonPrevius);
  // const Profile = (Array) => {
  //   Array.map((items) => {
  return (
    <div
      className="container-description"
      style={{ backgroundColor: pokemonDetail[0].color }}
    >
      <header>
        <div className="header1">
          <Link to={`/`}>
            <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
          </Link>
          <h1 className="h1Header">{pokemonDetail[0].nombre}</h1>
          {console.log(pokemonDetail.nombre)}

          {/* <h2 className="h2Header">#001</h2> */}
          <h2 className="h2Header">#{pokemonDetail[0].id}</h2>
        </div>
      </header>

      <main>
        <div className="image-section">
          <Link to={`PokemonProfile/${pokemonPre.nombre}`}>
            <img className="frame-left" src={frame} alt="Frame" />
          </Link>
          <img className="pokemon-image" src={pokemonDetail[0].img} alt="#" />
          <a href="">
            <img className="frame-right" src={frame} alt="Frame" />
          </a>
        </div>
        <div className="types-sections-container">
          <button className="verde">{pokemonDetail[0].type}</button>
          <button className="violeta">Polson</button>
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
            Chiorophyll <br />
            Overgrow
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

        {/* <div className="stats">
          <div className="column">
            <div className="letters">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="numbers">
              <p>{pokemonDetail[0].HP}</p>
              <p>{pokemonDetail[0].ATK}</p>
              <p>{pokemonDetail[0].DEF}</p>
              <p>{pokemonDetail[0].SATK}</p>
              <p>{pokemonDetail[0].SDEF}</p>
              <p>{pokemonDetail[0].SPD}</p>
            </div>
          </div>
          <div className="porcentaje">
            <div className="porcentaje1">
              <div className="progress1"></div>
            </div>
            <div className="porcentaje2">
              <div className="progress2"></div>
            </div>
            <div className="porcentaje3">
              <div className="progress3"></div>
            </div>
            <div className="porcentaje4">
              <div className="progress4"></div>
            </div>
            <div className="porcentaje5">
              <div className="progress5"></div>
            </div>
            <div className="porcentaje6">
              <div className="progress6"></div>
            </div>
          </div>
        </div> */}
        <div className="BaseStats-box">
          <RadarChart
            outerRadius={75}
            width={370}
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
