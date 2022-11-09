import React from "react";
import "../profiles/App.css";
import imgError from "../profiles/images/ErrorPage2.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="pageError">
      <div className="div1">
        <img src={imgError} ></img>
      </div>
      <div className="div2">
        <span className="text">
          <h2>
            <span className="error440">440</span> <br />
            Pokemon not found
          </h2>
          <p>
           this pokemon not exist
          </p>
        </span>
        <Link to={`/`}>
          <button className="buttonHome">Home</button>
        </Link>
      </div>
      <div className="div3">
      
      </div>
    </div>
  );
}

export default App;
