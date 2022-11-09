import React from "react";
import "../profiles/App.css";
import imgError from "../profiles/images/ErrorPage2.png";

function App() {
  return (
    <div className="pageError">
      <div className="div1">
        <img src={imgError} />
      </div>
      <div className="div2">
        <span className="text">
          <h2>
            <span className="error440">440</span> <br />
            Pokemon not fiend
          </h2>
          <p>this pokemon not exist</p>
        </span>
      </div>
      <div className="div3"></div>
    </div>
  );
}

export default App;
