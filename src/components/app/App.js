import React from "react";
import logo from "../../images/logo.svg";
// import "../app/App.css";
import { author, github } from "../../config/index.js";
import Provincias from "../provincias";
import Casos from "../casoscovid";

function App() {
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Tabla */}
      <Casos />
    </div>
  );
}

export default App;
