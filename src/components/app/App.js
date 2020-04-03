import React from "react";
import logo from "../../images/logo.svg";
import "../app/App.css";
import { author, github } from "../../config/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>COVID APP</p>
        <a
          className="App-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          @{author}\github
        </a>
      </header>
    </div>
  );
}

export default App;
