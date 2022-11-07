import React from "react";
import "../App.css";
import imgError from "../components/data/img/ErrorPage.png";
import { Link } from "react-router-dom";

function PageNoFound() {
  return (
    <div className="pageError">
      <div className="div1">
        <img src={imgError} />
      </div>
      <div className="div2">
        <span className="text">
          <h2>
            <span className="error440">440</span> <br />
            That's an error
          </h2>
          <p>
            Your client has issued a molformed or illegal request <br /> That's
            all whe know
          </p>
        </span>
      </div>
      <div className="div3">
        <Link to={`/`}>
          <button className="buttonHome">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNoFound;
