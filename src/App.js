import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome.js";
import GenX from "./components/genx.js";
import GenY from "./components/geny.js";
import GenZ from "./components/genz.js";
import Traditionalist from "./components/traditionalist.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
    </div>
  );
}

export default App;
