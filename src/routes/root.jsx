import React, { useState } from "react";
import Parent from "../components/Parent";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Root() {
  return (
    // <Router>
    <div>
      <Parent />
    </div>
    // </Router>
  );
}

export default Root;
