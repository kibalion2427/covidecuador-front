import React from "react";
import logo from "../../images/logo.svg";
import { author, github } from "../../config/index.js";
import Provincias from "../provincias";
import Casos from "../casoscovid";
import SwitchThemeContainer from "../../containers/SwitchThemeContainer";
import MapColorContainer from "../../containers/MapColorContainer";

const App = props => {
  return (
    <div>
      <SwitchThemeContainer color="blue" />
      <SwitchThemeContainer color="yellow" />
      <SwitchThemeContainer color="red" />
      <Casos />
      <MapColorContainer />
    </div>
  );
};

export default App;
