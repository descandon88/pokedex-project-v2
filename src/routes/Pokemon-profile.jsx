import React from "react";
import "../components/profiles/profile.css";
import arrowLeft from "../components/profiles/images/arrow-left.svg";
import bulbasaur from "../components/profiles/images/bulbasaur.png";
import frame from "../components/profiles/images/Frame.svg";
import peso from "../components/profiles/images/Weight.svg";
import altura from "../components/profiles/images/Height.svg";
import Parents from "../components/Parent";
const Profile = (props) => {
  return (
    <div className="container">
      <header>
        <div className="header1">
          <a href="">
            <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
          </a>
          <h1 className="h1Header">Bulbasaur</h1>
          <h2 className="h2Header">#001</h2>
        </div>
        <a href="">
          <img className="frame" src={frame} alt="Frame" />
        </a>
      </header>

      <main>
        <img className="bulbasaur" src={bulbasaur} alt="Bulbasaur" />
        <div className="buttons">
          <button className="verde">Grass</button>
          <button className="violeta">Polson</button>
        </div>
        <p className="title">About</p>

        <div className="info">
          <div className="weight">
            <img src={peso} alt="Peso" /> <p> 6,9 kg</p>
          </div>
          <div className="height">
            <img src={altura} alt="Altura" /> <p> 0,7 m</p>
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

        <p>
          There is a plant seed on its back right from day this pokemon is born.
          The seeed sloowly grows larger.{" "}
        </p>
        <p className="title">Base Stats</p>

        <div className="stats">
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
              <p>045</p>
              <p>049</p>
              <p>049</p>
              <p>065</p>
              <p>065</p>
              <p>045</p>
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
        </div>
      </main>
    </div>
  );
};

export default Profile;
